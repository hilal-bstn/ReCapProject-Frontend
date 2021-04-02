import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserUpdateModel } from '../models/userUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44351/api/auth/';
  constructor(private httpClient:HttpClient) { }
  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }
  update(userUpdateModel:UserUpdateModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",userUpdateModel)
  }

}
