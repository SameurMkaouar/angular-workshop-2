import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css',
})
export class FormUserComponent {
  userName = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  formUser = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    city: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  get f() {
    return this.formUser.controls;
  }
}
