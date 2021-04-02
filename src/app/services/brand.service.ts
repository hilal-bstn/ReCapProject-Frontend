import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44351/api/"
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
}
getBrandsByBrandId(brandId:Number):Observable<SingleResponseModel<Brand>> {
  let newPath=this.apiUrl+"brands/getbyid?id="+brandId
  return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
}
add(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/add",brand)
}
update(brand:Brand):Observable<ResponseModel>{
  return this.httpClient.post<ResponseModel>(this.apiUrl+"brands/update",brand)
}
}