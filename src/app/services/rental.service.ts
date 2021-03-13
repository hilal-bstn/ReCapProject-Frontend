import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailsDto } from '../models/rentalDetailsDto';


@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44351/api/rentals/getrentaldetails"
  constructor(private httpClient:HttpClient) { }
  getRentalDetails():Observable<ListResponseModel<RentalDetailsDto>>{
    return this.httpClient.get<ListResponseModel<RentalDetailsDto>>(this.apiUrl);
}
}
