import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  token: string = 'token';
  currentUser: string = "user";
  constructor() { }
  setToken(responseToken: string) 
  {
    localStorage.setItem(this.token, responseToken);
  }

 removeToken() 
 {
  localStorage.removeItem(this.token);
 }

 getToken() 
 {
  return localStorage.getItem(this.token);
 }
 isAuthenticated(){
  if(this.getToken()){
    return true;
  }
  else{
    return false;
  }
}
setUser(user: User) 
{
  localStorage.setItem(this.currentUser, JSON.stringify(user));
}

getUser(): User 
{
  return JSON.parse(localStorage.getItem(this.currentUser));
}

removeUser() 
{
  localStorage.removeItem(this.currentUser);
}
}
