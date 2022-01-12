import {Component, OnInit} from '@angular/core';
import {Item} from "../model/item";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-item-gallery',
  templateUrl: './item-gallery.component.html',
  styleUrls: ['./item-gallery.component.css']
})
export class ItemGalleryComponent implements OnInit {

  items: Item [] = [];
  searchText: string = '';
  selectedItem?: Item;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  setColor(stockUrgency: string): string {
    if (stockUrgency === 'STOCK_LOW') {
      return 'stockLow';
    } else if (stockUrgency === 'STOCK_MEDIUM') {
      return 'stockMedium';
    } else if (stockUrgency === 'STOCK_HIGH') {
      return 'stockHigh';
    }
    return ''
  }

  showDetails(item: Item) {
    this.selectedItem = item;
  }
}
