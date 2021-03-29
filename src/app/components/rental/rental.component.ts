import { Component,Input, OnInit } from '@angular/core';
import {  ActivatedRoute ,Router} from '@angular/router';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { RentalService } from 'src/app/services/rental.service';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalAddForm : FormGroup;
   carDetails:CarDetailsDto[]=[];
   car:CarDetailsDto;
   carId1:number;
   amount:number=0;
   dailyPrice:number;
  constructor(private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private carimageService:CarimageService,
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
    this.createrentalAddForm();
  })
  
}

  createrentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId: [this.carId1],
      customerId: ["",Validators.required],
      rentDate:["", Validators.required],
      returnDate:["",Validators.required]
    })
    
 }
 
 getCarDetailsByCarId(carId:Number){
  this.carimageService.getCarDetailsByCarId(carId).subscribe(response=>{
    this.carDetails=response.data;
  });}
  GetTotalDays(firstDate:Date, lastDate:Date) 
{
   return Math.round((lastDate.getTime()- firstDate.getTime()) / (1000 * 60 * 60 * 24));  
}
 add(){
  if(this.rentalAddForm.valid)
  { 
    let rentalModel = Object.assign({},this.rentalAddForm.value)
    this.rentalService.add(rentalModel).subscribe(response=>{
      this.toastrService.success("Araç girdiğiniz tarihlerde uygun")
      this.toastrService.info("Ödeme Sayfasına Yönlendiriliyorsunuz..")
     // this.amount=this.GetTotalDays(rentalModel.rentDate,rentalModel.returnDate)*this.car.dailyPrice
      this.router.navigate(["payment",this.dailyPrice,rentalModel.rentDate,rentalModel.returnDate])
    },responseError=>{
      this.toastrService.error(responseError.error);
      
    })}
  
    
  else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
 }
}

