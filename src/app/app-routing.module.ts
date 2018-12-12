import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';


/**
 * A variable that sets app routes which loads all components and component's children to perform lazy loading throughout the application.
 *
 * @type {Routes}
 */
const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'speech', loadChildren: './speech/speech.module#SpeechModule' },
  { path: '**', component: PageNotFoundComponent }
];

/**
 * A variable that exports app's root routes and disable using hash on url suffixes.
 *
 * @type {RouterModule}
 */
export const AppRouting: RouterModule = RouterModule.forRoot(routes, { useHash: false });
