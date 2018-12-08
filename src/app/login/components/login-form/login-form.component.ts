import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { loginFormFields } from '@app/login/components/login-form/login-form.data';

import { Credentials } from '@app/login/models/login.interface';


@Component({
  selector    : 'app-login-form',
  templateUrl : './login-form.component.html',
  styleUrls   : ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  form: FormGroup = new FormGroup({});
  
  fields: FormlyFieldConfig[] = loginFormFields;
  model: Credentials = { username: 'admin', password: 'admin' };
  
  constructor(private router: Router) { }

  ngOnInit() {}
  
  submitForm(credentials: Credentials): void {
    this.router.navigate(['speech']);
  }

}
