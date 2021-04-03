import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserCreditCard } from '../models/userCreditCard';

@Injectable({
  providedIn: 'root'
})
export class UserCreditCardService {
  apiUrl="https://localhost:44351/api/usercreditcards/"
  constructor(private httpClient:HttpClient) { }
  add(creditCart:UserCreditCard):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",creditCart)
  }
  getByUserId(Id:Number):Observable<ListResponseModel<UserCreditCard>> {
    let newPath=this.apiUrl+"getbyuserid?id="+Id
    return this.httpClient.get<ListResponseModel<UserCreditCard>>(newPath);
  }
}
