import { Component, OnInit } from '@angular/core';
import {Item} from "../../model/item";
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../../services/item.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  selectedItem?: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id!)
      .subscribe(item => this.selectedItem = item);
    }

}
