import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemDetailComponent} from "../item-detail/item-detail.component";
import {CreateItemComponent} from "../create-item/create-item.component";

const routes: Routes = [

  {path: 'detail/:name', component: ItemDetailComponent},
  {path: 'create', component: CreateItemComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
