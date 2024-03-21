import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    name: [''],
    price: [0],
    inStorage: [0],
  });

  constructor(private fb: FormBuilder) {}

  onSave(): void {
    console.log(this.myForm.value);
  }
}
