import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  carUpdateForm : FormGroup;
  car:Car[]=[];
  carDetails:CarDetailsDto[]=[];
  brands:Brand[]=[];
  colors:Color[]=[];
  SelectBrand:number;
  SelectColor:number;
  Id1:number;
  constructor(private formBuilder:FormBuilder,
    private carService:CarService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["Id"])
      { this.getCarDetailsByCarId(params["Id"])
         this.getBrands();
        this.getColors();
        this.Id1=parseInt(params["Id"]);
        }
    this.createCarUpdateForm();
    })
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    });

  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    });}
  createCarUpdateForm(){
    this.carUpdateForm = this.formBuilder.group({
      Id: [this.Id1],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]

    })
    console.log(this.carUpdateForm)
    
 }
 update(){
  if(this.carUpdateForm.valid)
  {
    let carModel = Object.assign({},this.carUpdateForm.value)
    this.carService.update(carModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) 
        {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
        }       
      } 
    })}
  
    
  else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
 }
 getCarDetailsByCarId(carId:Number){
  this.carService.getCarsByCarId(carId).subscribe(response=>{
    this.carDetails=response.data;
  });}
}
