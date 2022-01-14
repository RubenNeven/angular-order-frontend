import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ItemService} from "../../services/item.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  /*item$ = Observable<Item>;*/
  itemForm = this.formBuilder.group(
    {
      name: '',
      description: ['', [Validators.maxLength(255)]],
      price: ['', [Validators.min(0)]],
      amountOfStock: ['', [Validators.min(0)]],
    });

  ngOnInit(): void {
/*    this.item$ = this.activatedRoute.paramMap
      .pipe(
        flatMap(param => this.itemService.getItem(param.get('id'))),
    tap(item => this.itemForm.patchValue(item))
  )*/
  }

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router) {
  }


  get name(): FormControl {
    return this.itemForm.get('name') as FormControl;
  }

  get price(): FormControl {
    return this.itemForm.get('price') as FormControl;
  }

  get description(): FormControl {
    return this.itemForm.get('description') as FormControl;
  }

  get amountOfStock(): FormControl {
    return this.itemForm.get('amountOfStock') as FormControl;
  }



  onSubmit() {
    this.itemService.addItem(this.itemForm.value)
      .subscribe(data => {
          this.itemForm.reset();
          this.router.navigate(['../'])
        }
      );
  }
}
