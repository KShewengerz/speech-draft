import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Modules
 */
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { AppRouting } from './app-routing.module';


/**
 * Components
 */
import { AppComponent } from '@app/app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


/**
 *  A module that holds the declarations, imports and providers of the AppModule that loads as a single instance globally
 * throughout the application.
 */
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
