import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarimageService } from 'src/app/services/carimage.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAddForm : FormGroup;
  carDetails:CarDetailsDto[]=[];
  dailyPrice:number;
  rentDate:any;
  returnDate:any;
  amount:number=0;
  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private carimageService:CarimageService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["dailyPrice"]&&params["rentDate"]&&params["returnDate"])
      { 
        this.amount=this.GetTotalDays(params["rentDate"],params["returnDate"],parseInt(params["dailyPrice"]))
        this.rentDate=params["rentDate"]
        this.returnDate=params["returnDate"]
        console.log(this.amount)
      }
     
    this.createpaymentAddForm();
  })}
  getCarDetailsByCarId(carId:Number){
    this.carimageService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails=response.data;
    });}
  createpaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      cardNumber:["",Validators.required],
      cvv: ["",Validators.required],
      amount:[this.amount],
    })
 }
 GetTotalDays(firstDate:any, lastDate:any,price:number) 
{firstDate=new Date(firstDate)
  lastDate=new Date(lastDate)
   return (Math.ceil((lastDate.getTime()- firstDate.getTime()) / (1000 * 60 * 60 * 24)))*price;  
}
add(){
  if(this.paymentAddForm.valid)
  { 
    let paymentModel = Object.assign({},this.paymentAddForm.value)
    this.paymentService.add(paymentModel).subscribe(response=>{
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
}

