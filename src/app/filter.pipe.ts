import { Pipe, PipeTransform } from '@angular/core';
import { Pet } from './Model/appointmentPet.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], value: string) {
    if (!items || !value) {
      return items;
    }

    if(items[0] instanceof Pet) {
      return this.filterPet(items, value);
    }
    return this.filterPetParent(items, value);
  }

  filterPetParent(items: any[], value: string) {
    return items.filter(
      (item) =>
        item.parentName.toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
          );
  }

  filterPet(items: any[], value: string) {
    return items.filter(
      (item) =>
        item.petName.toString()
          .toLowerCase()
          .includes(value.toString().toLowerCase())
          );
  }
}
