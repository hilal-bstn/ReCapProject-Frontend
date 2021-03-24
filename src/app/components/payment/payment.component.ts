import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
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
  dataLoaded=false;
  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["dailyPrice"])
      {  
        this.dailyPrice=parseInt(params["dailyPrice"]);
      }})
    this.createpaymentAddForm();
  }
  createpaymentAddForm(){
    this.paymentAddForm = this.formBuilder.group({
      cardNumber:["",Validators.required],
      cvv: ["",Validators.required],
      amount:[this.dailyPrice],
    })
 }
 add(){
  if(this.paymentAddForm.valid)
  {
    let paymentModel = Object.assign({},this.paymentAddForm.value)
    this.paymentService.add(paymentModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }       
      } 
    })}
  
    
  else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
 }
}
