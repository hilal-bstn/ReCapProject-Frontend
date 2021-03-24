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
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }
  getCarsDetails():Observable<ListResponseModel<CarDetailsDto>>
  { let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByBrand(brandId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByColor(colorId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarsByCarId(carId:Number):Observable<ListResponseModel<CarDetailsDto>> {
    let newPath=this.apiUrl+"cars/getcardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
  }
  getCarByBrandAndColor(brandId:Number,colorId:Number)
       {
        let newPath=this.apiUrl+"cars/getcardetailsbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId     
           return this.httpClient.get<ListResponseModel<CarDetailsDto>>(newPath);
       }
  add(car:Car):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
      }
      update(car:Car):Observable<ResponseModel>{
        return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/update",car)
      }
}


