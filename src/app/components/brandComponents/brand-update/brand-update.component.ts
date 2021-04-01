import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {
  brandUpdateForm : FormGroup;
  brand:Brand;
  brandId1:number;
  constructor(private formBuilder:FormBuilder,
    private brandService:BrandService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
    if(params["brandId"])
    {  this.brandId1=parseInt(params["brandId"]);
      this.getBrandByBrandId(params["brandId"]);
      
       
    }
  this.createBrandUpdateForm();
  })}
  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandId: [this.brandId1],
      brandName: [this.brand.brandName,Validators.required],
    })
    
 }
 update(){
  if(this.brandUpdateForm.valid)
  {
    let brandModel = Object.assign({},this.brandUpdateForm.value)
    this.brandService.update(brandModel).subscribe(response=>{
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
 getBrandByBrandId(brandId:Number){
  this.brandService.getBrandsByBrandId(brandId).subscribe(response=>{
    this.brand=response.data;
  });}
}
