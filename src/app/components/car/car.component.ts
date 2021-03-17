import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsDto } from 'src/app/models/carDetailsDto';

import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carsDetails:CarDetailsDto[]=[];
  dataLoaded=false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
      {
         this.getCarByBrand(params["brandId"])
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
       

}
