import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm : FormGroup;
  colors:Color[]=[];
  colorId1:number;
  constructor(private formBuilder:FormBuilder,
    private colorService:ColorService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"])
      {  
        
        this.getColorsByColorId(params["colorId"])
        this.colorId1=parseInt(params["colorId"]);
         
      }
    this.createColorUpdateForm();
    })
  }
  createColorUpdateForm(){
    this.colorUpdateForm = this.formBuilder.group({
      colorId: [this.colorId1],
      colorName: ["",Validators.required],
    })
    
 }
 update(){
  if(this.colorUpdateForm.valid)
  {
    let colorModel = Object.assign({},this.colorUpdateForm.value)
    this.colorService.update(colorModel).subscribe(response=>{
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
 getColorsByColorId(colorId:Number){
  this.colorService.getColorsByColorId(colorId).subscribe(response=>{
    this.colors=response.data;
    console.log(this.colors)
  });}
}
