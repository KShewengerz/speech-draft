import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' },
  { path: 'speech', loadChildren: './speech/speech.module#SpeechModule' },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false });
