import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brandComponents/brand/brand.component';
import { ColorComponent } from './components/colorComponents/color/color.component';
import { NaviComponent } from './components/naviComponents/navi/navi.component';
import { CarComponent } from './components/carComponents/car/car.component';
import { CustomerComponent } from './components/customerComponents/customer/customer.component';
import { CarDetailComponent } from './components/carComponents/car-detail/car-detail.component';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterColorPipe } from './pipes/filter-color.pipe';
import { CarFilterComponent } from './components/carComponents/car-filter/car-filter.component';
import { RentalListComponent } from './components/rentalComponents/rental-list/rental-list.component';
import { PaymentComponent } from './components/rentalComponents/payment/payment.component';

import { RentalComponent } from './components/rentalComponents/rental/rental.component';
import {ToastrModule} from "ngx-toastr";
import { BrandAddComponent } from './components/brandComponents/brand-add/brand-add.component';
import { ColorAddComponent } from './components/colorComponents/color-add/color-add.component';
import { CarAddComponent } from './components/carComponents/car-add/car-add.component';
import { CarUpdateComponent } from './components/carComponents/car-update/car-update.component';
import { ColorUpdateComponent } from './components/colorComponents/color-update/color-update.component';
import { BrandUpdateComponent } from './components/brandComponents/brand-update/brand-update.component';
import { RegisterComponent } from './components/authComponents/register/register.component';
import { LoginComponent } from './components/authComponents/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthMenuComponent } from './components/naviComponents/auth-menu/auth-menu.component';
import { ProfileUpdateComponent } from './components/authComponents/profile-update/profile-update.component';
import { ProfileComponent } from './components/authComponents/password-update/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CarComponent,
    RentalComponent,
    CustomerComponent,
    CarDetailComponent,
    FilterBrandPipe,
    FilterColorPipe,
    CarFilterComponent,
    RentalListComponent,
    PaymentComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    CarUpdateComponent,
    ColorUpdateComponent,
    BrandUpdateComponent,
    RegisterComponent,
    LoginComponent,
    AuthMenuComponent,
    ProfileUpdateComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
