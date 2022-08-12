import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'issueFilter',
})
export class IssueFilter implements PipeTransform {
  transform(items: string[], value: string) {
    if (!items || !value) {
      return items;
    }
    return items.filter((item) => {
      return item.toLowerCase().includes(value.toString().toLowerCase());
    });
  }
}
