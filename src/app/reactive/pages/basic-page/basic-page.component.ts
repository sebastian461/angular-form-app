import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent {
  //* Este es un formulario con FormControl
  /* public myForm: FormGroup = new FormGroup({
    name: new FormControl('', [], []), //valor inicial - validaciónes sincronas - validaciones ásincronas
    price: new FormControl(0),
    inStorage: new FormControl(0),
  }); */

  //* Este es un formulario con FormBuilder
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [(Validators.required, Validators.min(0))]],
  });

  constructor(private fb: FormBuilder) {}

  onSave(): void {
    if (this.myForm.invalid) return;
    console.log(this.myForm.value);
  }
}
