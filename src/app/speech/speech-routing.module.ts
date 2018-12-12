import { Routes, RouterModule } from '@angular/router';

import { SpeechComponent } from '@app/speech/containers/speech/speech.component';
import { ViewSpeechComponent } from './containers/view-speech/view-speech.component';
import { SubmitSpeechComponent } from './containers/submit-speech/submit-speech.component';
import { SearchSpeechComponent } from './containers/search-speech/search-speech.component';


/**
 * A variable that contains the speech routes. Each routes that aren't empty are served as a router link of each speech main tabs
 *
 * @type {Routes}
 */
const routes: Routes = [
  { path: '',
    component: SpeechComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'view-speech' },
      { path: 'view-speech', component: ViewSpeechComponent },
      { path: 'submit-speech', component: SubmitSpeechComponent },
      { path: 'search-speech', component: SearchSpeechComponent }
    ]
  }
];

/**
 * A variable that exports speech's child routes
 */
export const SpeechRouting = RouterModule.forChild(routes);
