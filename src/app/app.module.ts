import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { AppRouting } from './app-routing.module';


// Components
import { AppComponent } from '@app/app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRouting
  ],
  providers: [ BsModalService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
