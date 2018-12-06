import { Routes, RouterModule } from '@angular/router';

import { ViewSpeechComponent } from './containers/view-speech/view-speech.component';
import { SubmitSpeechComponent } from './containers/submit-speech/submit-speech.component';
import { SearchSpeechComponent } from './containers/search-speech/search-speech.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view-speech' },
  { path: 'view-speech', component: ViewSpeechComponent },
  { path: 'submit-speech', component: SubmitSpeechComponent },
  { path: 'search-speech', component: SearchSpeechComponent }
];

export const SpeechRouting = RouterModule.forChild(routes);
