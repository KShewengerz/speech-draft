import { Component } from '@angular/core';


/**
 * A component that is responsible on rendering the  404 template whenever a user tends to navigate a page
 * that isn't registered on the app.
 */
@Component({
  selector    : 'app-page-not-found',
  templateUrl : './page-not-found.component.html',
  styleUrls   : ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {}
