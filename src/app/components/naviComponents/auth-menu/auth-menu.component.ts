import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailsDto } from 'src/app/models/userDetailsDto';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {

  constructor(private router:Router,private localStorageService:LocalStorageService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.login();
  }
  login()
  {
    return this.localStorageService.isAuthenticated();
  }
  logout() {
   this.localStorageService.removeToken();
   this.localStorageService.removeUser();
   this.toastrService.info("Çıkış yapılıyor..");
   this.router.navigate(['cars']);
 }
 getCurrentUserDetails():UserDetailsDto
 {
   return this.localStorageService.getUser();
 }
}
