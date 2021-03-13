import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDeatailsDto } from '../models/customerDeatailsDto';
import { ListResponseModel } from '../models/listResponseModel';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl="https://localhost:44351/api/customers/getcustomerdetails"
  constructor(private httpClient:HttpClient) { }
  getCustomerDetails():Observable<ListResponseModel<CustomerDeatailsDto>>{
    return this.httpClient.get<ListResponseModel<CustomerDeatailsDto>>(this.apiUrl);
}
}
