import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetailsDto } from '../models/userDetailsDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = 'https://localhost:44351/api/users/';
  getUserDetailsByEmail(email: string): Observable<SingleResponseModel<UserDetailsDto>> {
    let newPath = this.apiUrl + 'getuserdetailsbyemail?email=' + email;
    return this.httpClient.get<SingleResponseModel<UserDetailsDto>>(newPath);
 }
}
