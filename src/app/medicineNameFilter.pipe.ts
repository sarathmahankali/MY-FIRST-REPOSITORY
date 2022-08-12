import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'medicineFilter'
})
export class MedicineNameFilter implements PipeTransform{
    transform(items:any[],value:string) {
       if(!items || !value){
           return items;
       }
       return items.filter((
           (item)=>item.Name.toString().toLowerCase().includes(value.toString().toLowerCase())
       ))
    }

}