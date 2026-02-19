import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css',
})
export class FormUserComponent {
  userName = new FormControl('test');
  password = new FormControl('123');
}
