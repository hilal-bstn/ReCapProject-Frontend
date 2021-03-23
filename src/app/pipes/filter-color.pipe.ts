import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailsDto } from '../models/carDetailsDto';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: CarDetailsDto[], filterText:string): CarDetailsDto[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((c:CarDetailsDto)=>c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
