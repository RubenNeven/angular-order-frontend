import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "./model/item";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string): Item[] {
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    })
  }

}
