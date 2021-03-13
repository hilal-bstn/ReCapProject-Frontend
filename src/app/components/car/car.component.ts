import { Component, OnInit } from '@angular/core';
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
  constructor(private carService:CarService) { }
  
  ngOnInit(): void {
    this.getCarsDetails();
  }
  getCarsDetails(){
    this.carService.getCarsDetails().subscribe(response=>{
      this.carsDetails=response.data
      this.dataLoaded=true;
    });

  }

}
