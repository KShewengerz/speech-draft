import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Modules
 */
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { LoginComponent } from '@app/login/containers/login/login.component';
import { LoginFormComponent } from '@app/login/components/login-form/login-form.component';

import { LoginRouting } from '@app/login/login-routing.module';


/**
 *  A module that holds the declarations and imports that loads within the Login Feature Module
 */
@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    AngularFontAwesomeModule,
    LoginRouting
  ]
})
export class LoginModule {}
