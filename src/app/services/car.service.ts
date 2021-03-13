import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsDto } from '../models/carDetailsDto';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44351/api/cars/getcardetails"
  constructor(private httpClient:HttpClient) { }
  getCarsDetails():Observable<ListResponseModel<CarDetailsDto>>{
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(this.apiUrl);
}
}
