import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailsDto } from '../models/carDetailsDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44351/api/cars/"
  constructor(private httpClient:HttpClient) { }
  getCarsDetails():Observable<ListResponseModel<CarDetailsDto>>
  { let newPath=this.apiUrl+"getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByBrand(brandId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"getcardetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByColor(colorId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByCarId(carId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarByBrandAndColor(brandId:Number,colorId:Number)
       {
        let newPath=this.apiUrl+"getcardetailsbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId     
           return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
       }
  add(car:Car):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"add",car)
      }
      update(car:Car):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"update",car)
      }
}


