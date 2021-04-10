import { Component,Input, OnInit } from '@angular/core';
import {  ActivatedRoute ,Router} from '@angular/router';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarimageService } from 'src/app/services/carimage.service';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CustomerFindeksScoreService } from 'src/app/services/customer-findeks-score.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalAddForm : FormGroup;
   carDetails:CarDetailsDto[]=[];
   car:CarDetailsDto;
   user:UserDetailsDto;
   carId1:number;
   dailyPrice:number;
   dataLoaded=false;
  constructor(private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private carimageService:CarimageService,
    private localStorageService:LocalStorageService,
    private customerFindeks:CustomerFindeksScoreService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]&&params["dailyPrice"])
      {  
        this.carId1=parseInt(params["carId"]);
        this.getCarDetailsByCarId(params["carId"]) ;
        this.dailyPrice=parseInt(params["dailyPrice"]);
     }
     this.getUser();
    this.createrentalAddForm();
  })
  
}

  createrentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId: [this.carId1],
      customerId: [this.user.customerId,Validators.required],
      rentDate:["", Validators.required],
      returnDate:["",Validators.required]
    })
    
 }
 
 getCarDetailsByCarId(carId:Number){
  this.carimageService.getCarDetailsByCarId(carId).subscribe(response=>{
    this.carDetails=response.data;
  });}
 //ödeme türü ekle ona göre add i kartla ödeme sayfasına da ekle
 add(){
  if(this.rentalAddForm.valid)
  { 
    let rentalModel = Object.assign({},this.rentalAddForm.value)
    this.rentalService.add(rentalModel).subscribe(response=>{
      this.toastrService.success("Araç girdiğiniz tarihlerde uygun")
      this.toastrService.info("Ödeme Sayfasına Yönlendiriliyorsunuz..")
      this.router.navigate(["payment",this.dailyPrice,rentalModel.rentDate,rentalModel.returnDate])
    },responseError=>{
      this.toastrService.error(responseError.error);
      
    })}
  
    
  else{
    this.toastrService.error("Lütfen Tarih Bilgilerini Girdiğinizden Emin olun","Dikkat")
  }
 }
 getUser()
 {
   this.user=this.localStorageService.getUser();
 }
 checkFindeks()
 {
   this.customerFindeks.checkFindeksScore(this.carId1,this.user.customerId).subscribe((response) => {
    if (response.success) {
     this.dataLoaded=true;
     this.add()
    }
    else{
      this.toastrService.error("Bu araç için yeterli findeks puanına sahip değilsiniz.")
    } 
 });
 }
}