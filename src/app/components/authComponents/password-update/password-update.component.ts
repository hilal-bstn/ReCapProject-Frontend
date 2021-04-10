import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {
  passwordUpdateForm : FormGroup;
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
    
  })
  this.createPasswordUpdateForm();
  }
  createPasswordUpdateForm(){
    this.passwordUpdateForm = this.formBuilder.group({
      userId: [this.user.userId],
      oldPassword:["",Validators.required],
      newPassword:["",Validators.required],
      
    })
}
passwordUpdate(){
   
  if(this.passwordUpdateForm.valid)
  {
    let passwordUpdateModel = Object.assign({},this.passwordUpdateForm.value)
    this.authService.passwordUpdate(passwordUpdateModel).subscribe(response=>{
    this.toastrService.success("Şifreniz Güncellendi")
    this.router.navigate(["cars"]);
    },responseError=>{
      this.toastrService.error("Lütfen Eksik Bilgi Girmeyiniz..")
    })}
  
  else{
    this.toastrService.error("Formunuz eksik","Dikkat")
  }
 }
getUser()
 {
   this.user=this.localStorageService.getUser();
 }
}
