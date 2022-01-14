import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {UpdateItemComponent} from "./update-item/update-item.component";


const routes: Routes = [
  {path: 'create', component: CreateItemComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  {path: 'update/:id', component: UpdateItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
