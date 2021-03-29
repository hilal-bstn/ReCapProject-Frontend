import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      })}

  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let registerModel = Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        this.toastrService.error(responseError.error)
      })
    }
    else{
      this.toastrService.error("Hatalı Form Gönderimi")
    }
  }

}
