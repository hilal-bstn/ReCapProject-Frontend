import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalListComponent } from './components/rental-list/rental-list.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/car-detail/:carId",component:CarDetailComponent},
  {path:"cars/:brandId/:colorId",component:CarComponent},
  {path:"rentals/:carId",component:RentalComponent},
  {path:"rentals-list",component:RentalListComponent},
  {path:"payment/:dailyPrice",component:PaymentComponent},
  {path:"brand-add",component:BrandAddComponent},
  {path:"color-add",component:ColorAddComponent},
  {path:"car-add",component:CarAddComponent},
  {path:"car-update/:Id",component:CarUpdateComponent},
  {path:"brand-update/:brandId",component:BrandUpdateComponent},
  {path:"color-update/:colorId",component:ColorUpdateComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
