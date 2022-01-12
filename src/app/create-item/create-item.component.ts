import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ItemService} from "../item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  createItemForm = this.formBuilder.group(
    {
      name: '',
      description: ['', [Validators.maxLength(255)]],
      price: ['',  [Validators.min(0)]],
      amountOfStock: ['', [Validators.min(0)]],

    }
  );

  constructor(private formBuilder: FormBuilder, private itemService: ItemService, private router: Router) { }

  get name(): FormControl {
    return this.createItemForm.get('name') as FormControl;
  }

  get price(): FormControl {
    return this.createItemForm.get('price') as FormControl;
  }

  get description(): FormControl{
    return this.createItemForm.get('description') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.createItemForm.get('amountOfStock') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.itemService.addItem(this.createItemForm.value)
      .subscribe(data => {
          this.createItemForm.reset();
          this.router.navigate(['../'])
        }
      );
  }
}
