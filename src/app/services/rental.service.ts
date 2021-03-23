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
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }
  getRentalDetails():Observable<ListResponseModel<RentalDetailsDto>>{
    let newPath=this.apiUrl+"rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDetailsDto>>(newPath);
}
add(rental:Rental):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"rentals/add",rental)
}
}
