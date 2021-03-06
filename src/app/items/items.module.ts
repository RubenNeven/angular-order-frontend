import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import {ItemGalleryComponent} from "./item-gallery/item-gallery.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "../filter.pipe";
import { UpdateItemComponent } from './update-item/update-item.component';

@NgModule({
  declarations: [
    ItemGalleryComponent,
    CreateItemComponent,
    ItemDetailComponent,
    FilterPipe,
    UpdateItemComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FilterPipe]
})
export class ItemsModule { }
