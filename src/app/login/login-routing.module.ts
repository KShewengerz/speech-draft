import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/login/containers/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent }
];

export const LoginRouting = RouterModule.forChild(routes);
