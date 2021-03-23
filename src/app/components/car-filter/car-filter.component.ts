import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  brands:Brand[]=[];
  colors:Color[]=[];
  SelectBrand:number;
  SelectColor:number;
  currentBrand:Brand;
  constructor(private brandService:BrandService,private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    });

  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand)
    {
      return "list-group-item active"
    }
    else{return "list-group-item"}
  }
  setCurrentBrand(brand:Brand)
{
this.currentBrand=brand;
}
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    });}
  getAllBrandClass(){
    if(!this.currentBrand)
    {
      return "list-group-item active"
    }
    else
    {
      return "list-group-item"
    }

}

}
