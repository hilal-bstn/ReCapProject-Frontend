import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { payment } from '../models/payment';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }
  add(pay:payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"payments/add",pay)
  }
}
