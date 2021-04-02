import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {
  userUpdateForm : FormGroup;
  user:UserDetailsDto;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private toastrService:ToastrService,
    private authService:AuthService,
    private localStorageService:LocalStorageService,
    private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        this.getUser();
      this.createUserUpdateForm();
    })
   
  }
  createUserUpdateForm(){
    this.userUpdateForm = this.formBuilder.group({
      userId: [this.user.userId],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      companyName:["",Validators.required],
    })
    
 }
 update(){
   
  if(this.userUpdateForm.valid)
  {
    let userModel = Object.assign({},this.userUpdateForm.value)
    this.authService.update(userModel).subscribe(response=>{
    this.toastrService.success("Bilgiler Güncellendi")
    this.setUser(userModel.firstName,userModel.lastName,userModel.email,userModel.companyName)
    this.localStorageService.removeUser();
    this.localStorageService.setUser(this.user)//güncellenmiş user bilgileri
    },responseError=>{
      this.toastrService.error("hatalı")
    })}
  
  else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
 }
 getCurrentUserDetails():UserDetailsDto//bilgileri inputlara yazdırmak için
 {
   return this.localStorageService.getUser();
 }
 getUser()
 {
   this.user=this.localStorageService.getUser();
 }
 setUser(firstName:string,lastName:string,email:string,companyName:string)
 {
  
  this.user.firstName=firstName;
  this.user.lastName=lastName;
  this.user.email=email;
  this.user.companyName=companyName;
 }
}
