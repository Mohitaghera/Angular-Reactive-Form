import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.email,
      ]),
      gender: new FormControl('', [Validators.required]),
      married: new FormControl(false),
      country: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const marriedValue =
      this.myForm.get('married')!.value === null
        ? false
        : this.myForm.get('married')!.value;
    this.myForm.get('married')!.setValue(marriedValue);

    console.log(this.myForm.value);
    this.onReset();
  }

  onReset() {
    this.myForm.reset();
  }
}
