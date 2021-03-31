import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';
import { CarImage } from 'src/app/models/car_image';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';

import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carImages:CarImage[]=[];
  carsDetails:CarDetailsDto[]=[];
  dataLoaded=false;
  fltrBrand="";
  fltrColor="";
  apiUrl:string="https://localhost:44351";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,
    private brandService:BrandService,private colorService:ColorService,private carimageService:CarimageService) { }
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      
      if (params["brandId"]&& params["colorId"]) {
        this.getCarByBrandAndColor(params["brandId"],params["colorId"])
        console.log("çalıştı");
      } 
      else if(params["brandId"])
      {
         this.getCarByBrand(params["brandId"])
         console.log(" brand çalıştı")
      }
       else if (params["colorId"]) {
        this.getCarByColor(params["colorId"])
      } 
      else
      {
        this.getCarsDetails();
        
      }

    })
  }
  getCarsDetails(){
    this.carService.getCarsDetails().subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
    });

  }
  getCarByBrand(brandId:Number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
    });
     }
     getCarByColor(colorId:Number){
      this.carService.getCarsByColor(colorId).subscribe(response=>{
        this.carsDetails=response.data
        this.dataLoaded=true;
      });
       }
       getCarByBrandAndColor(brandId:Number,colorId:Number)
       {
         this.carService.getCarByBrandAndColor(brandId,colorId).subscribe(response=>{
           this.carsDetails=response.data
           this.dataLoaded=true;
         });
       }
    
    
}
