import { Component, OnInit } from '@angular/core';
import { CustomerDeatailsDto } from 'src/app/models/customerDeatailsDto';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customersDetails:CustomerDeatailsDto[]=[];
  dataLoaded=false;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCustomersDetails();
  }
  getCustomersDetails(){
    this.customerService.getCustomerDetails().subscribe(response=>{
      this.customersDetails=response.data
      this.dataLoaded=true;
    });

  }
}
