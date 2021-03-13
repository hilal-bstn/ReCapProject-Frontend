import { Component, OnInit } from '@angular/core';
import { RentalDetailsDto } from 'src/app/models/rentalDetailsDto';

import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalsDetails:RentalDetailsDto[]=[];
  dataLoaded=false;
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalsDetails();
  }
  getRentalsDetails(){
    this.rentalService.getRentalDetails().subscribe(response=>{
      this.rentalsDetails=response.data
      this.dataLoaded=true;
    });

  }

}
