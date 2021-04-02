import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { UserCreditCard } from 'src/app/models/userCreditCard';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { CarimageService } from 'src/app/services/carimage.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserCreditCardService } from 'src/app/services/user-credit-card.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardAddForm : FormGroup;
  carDetails:CarDetailsDto[]=[];
  dailyPrice:number;
  rentDate:any;
  returnDate:any;
  amount:number=0;
  user:UserDetailsDto;
  userCreditCard:UserCreditCard[]=[];
  data=false;
  constructor(private formBuilder:FormBuilder,
  private creditCardService:UserCreditCardService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private carimageService:CarimageService,
    private router:Router,
    private localStorageService:LocalStorageService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["dailyPrice"]&&params["rentDate"]&&params["returnDate"])
      { 
        this.amount=this.GetTotalDays(params["rentDate"],params["returnDate"],parseInt(params["dailyPrice"]))
        this.rentDate=params["rentDate"]
        this.returnDate=params["returnDate"]
       
      }
      this.getUser();
      this.getUserCreditCard()
    this.createpaymentAddForm();
  })}
  getCarDetailsByCarId(carId:Number){
    this.carimageService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails=response.data;
    });}
  createpaymentAddForm(){
    this.cardAddForm = this.formBuilder.group({
      userId:[this.user.userId,Validators.required],
      cardNumber:["",Validators.required],
      cvv: ["",Validators.required],
    })
 }
 GetTotalDays(firstDate:any, lastDate:any,price:number) 
{firstDate=new Date(firstDate)
  lastDate=new Date(lastDate)
   return (Math.ceil((lastDate.getTime()- firstDate.getTime()) / (1000 * 60 * 60 * 24)))*price;  
}
add(){
  if(this.cardAddForm.valid)
  { 
    let creditCardModel = Object.assign({},this.cardAddForm.value)
    this.creditCardService.add(creditCardModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
      this.toastrService.info("Ana Sayfaya Yönlendiriliyorsunuz..")
      this.router.navigate(["cars"])

    },responseError=>{
      this.toastrService.error(responseError.error);
      
    })}
  
    
  else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
 }
 pay()
 {
   this.toastrService.success("Ödeme işleminiz başarıyla gerçekleşmiştir.")
   this.router.navigate(["cars"])
 }
 getUser()
 {
   this.user=this.localStorageService.getUser();
  }
  getUserCreditCard()
  {
    
      this.creditCardService.getByUserId(this.user.userId).subscribe(response=>{
        this.userCreditCard=response.data;
        this.data=true;
      });
  }
}

