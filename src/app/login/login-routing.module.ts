import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/login/containers/login/login.component';


/**
 * A variable that contains the login routes. Loads the initial view/component - LoginComponent
 *
 * @type {Routes}
 */
const routes: Routes = [
  { path: '', component: LoginComponent }
];

/**
 * A variable that exports login's child routes
 */
export const LoginRouting = RouterModule.forChild(routes);
