import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { TabsModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SpeechRouting } from '@app/speech/speech-routing.module';

// Containers
import { SpeechComponent } from '@app/speech/containers/speech/speech.component';
import { ViewSpeechComponent } from '@app/speech/containers/view-speech/view-speech.component';
import { SubmitSpeechComponent } from '@app/speech/containers/submit-speech/submit-speech.component';
import { SearchSpeechComponent } from '@app/speech/containers/search-speech/search-speech.component';

// Components
import { SpeechTableListComponent } from '@app/speech/components/speech-table-list/speech-table-list.component';
import { SpeechFormComponent } from '@app/speech/components/speech-form/speech-form.component';
import { SpeechSubFieldsComponent } from '@app/speech/components/speech-sub-fields/speech-sub-fields.component';



@NgModule({
  declarations: [
    // Containers
    SpeechComponent,
    ViewSpeechComponent,
    SubmitSpeechComponent,
    SearchSpeechComponent,
    // Components
    SpeechTableListComponent,
    SpeechFormComponent,
    SpeechSubFieldsComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    AngularFontAwesomeModule,
    SpeechRouting
  ]
})
export class SpeechModule {}
