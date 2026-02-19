import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormUserComponent } from './form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormUserComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
})
export class UsersModule {}
