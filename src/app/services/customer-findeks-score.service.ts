import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailsDto } from '../models/carDetailsDto';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerFindeksScoreService {
  apiUrl="https://localhost:44351/api/customersfindeksscores/"
  constructor(private httpClient:HttpClient) { }

  checkFindeksScore(carId:Number,customerId:Number):Observable<ResponseModel> {   
    return this.httpClient.get<ResponseModel>(this.apiUrl+"checkFindeksScore?carId="+carId+"&customerId="+customerId );
  }
}

