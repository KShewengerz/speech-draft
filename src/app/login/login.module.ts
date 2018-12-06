import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from '@app/login/containers/login/login.component';
import { FormComponent } from '@app/login/components/form/form.component';

import { LoginRouting } from '@app/login/login-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    LoginRouting
  ]
})
export class LoginModule {}
