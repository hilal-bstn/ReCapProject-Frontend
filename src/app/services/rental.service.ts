import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailsDto } from '../models/rentalDetailsDto';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44351/api/rentals/"
  constructor(private httpClient:HttpClient) { }
  getRentalDetails():Observable<ListResponseModel<RentalDetailsDto>>{
    let newPath=this.apiUrl+"getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetailsDto>>(newPath);
}
add(rental:Rental):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"add",rental)
}
getMyRentalsDetails(customerId:number):Observable<ListResponseModel<RentalDetailsDto>>{
  let newPath=this.apiUrl+"getmyrentalsdetails?customerId="+customerId
  return this.httpClient.get<ListResponseModel<RentalDetailsDto>>(newPath);
}
}
