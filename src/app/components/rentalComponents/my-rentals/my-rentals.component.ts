import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetailsDto } from 'src/app/models/rentalDetailsDto';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.css']
})
export class MyRentalsComponent implements OnInit {

  constructor( private rentalService:RentalService,private activatedRoute:ActivatedRoute,
    private localStorageService:LocalStorageService,) { }
  myRentalsDetails:RentalDetailsDto[]=[];
  user:UserDetailsDto;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getUser();
      this.getMyRentalsDetails(this.user.customerId);
  })
  }
  getMyRentalsDetails(customerId:number){
    this.rentalService.getMyRentalsDetails(customerId).subscribe(response=>{
      this.myRentalsDetails=response.data;
    });}
    getUser()
 {
   this.user=this.localStorageService.getUser();
 }
}
