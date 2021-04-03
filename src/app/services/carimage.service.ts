import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsDto } from '../models/carDetailsDto';
import { CarImage } from '../models/car_image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {
  apiUrl="https://localhost:44351/api/carimages/"
  constructor(private httpClient:HttpClient) { }
  getCarImagesByCarId(carId:Number):Observable<ListResponseModel<CarImage>>
  { let newPath=this.apiUrl+"getall?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
  getCarDetailsByCarId(carId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
}
