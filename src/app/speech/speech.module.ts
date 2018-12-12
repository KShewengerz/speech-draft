import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @ignore Components
 */
import { TabsModule, BsDatepickerModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SpeechRouting } from '@app/speech/speech-routing.module';

/**
 * @ignore Containers
 */
import { SpeechComponent } from '@app/speech/containers/speech/speech.component';
import { ViewSpeechComponent } from '@app/speech/containers/view-speech/view-speech.component';
import { SubmitSpeechComponent } from '@app/speech/containers/submit-speech/submit-speech.component';
import { SearchSpeechComponent } from '@app/speech/containers/search-speech/search-speech.component';

/**
 * @ignore Components
 */
import { SpeechFormComponent } from '@app/speech/components/speech-form/speech-form.component';
import { SpeechSubFieldsComponent } from '@app/speech/components/speech-sub-fields/speech-sub-fields.component';
import { ModalTemplatesComponent } from '@app/speech/components/modal-templates/modal-templates.component';
import { ErrorFieldMessageComponent } from './components/error-field-message/error-field-message.component';
import { TableFilterPipe } from './containers/search-speech/table-filter.pipe';


/**
 * A module that holds the declarations and imports that loads within the Speech Feature Module
 */
@NgModule({
  declarations: [
    SpeechComponent,
    ViewSpeechComponent,
    SubmitSpeechComponent,
    SearchSpeechComponent,
    SpeechFormComponent,
    SpeechSubFieldsComponent,
    ModalTemplatesComponent,
    ErrorFieldMessageComponent,
    TableFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AngularFontAwesomeModule,
    SpeechRouting
  ],
  providers: [ DatePipe ]
})
export class SpeechModule {}
