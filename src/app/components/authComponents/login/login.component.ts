import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  userDetails:UserDetailsDto;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService, private toastrService:ToastrService,
    private localStorageService:LocalStorageService,
    private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        this.localStorageService.setToken(response.data.token)
        this.getUserDetailsByEmail(loginModel.email)
        this.router.navigate(["cars"]);
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
    else{
      this.toastrService.error("Bilgilerinizi yanlış ya da eksik girdiniz.")
    }
  }
  getUserDetailsByEmail(email: string) {
    this.userService.getUserDetailsByEmail(email).subscribe(responseSuccess => {
       this.userDetails = responseSuccess.data;
       this.localStorageService.setUser(this.userDetails);
    });
 }
}
