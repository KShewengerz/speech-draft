import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { TabsetComponent } from 'ngx-bootstrap';

import { filter } from 'rxjs/operators';

import { Tab, tabs } from '@app/speech/containers/speech/speech.data';


/**
 * A component that serves as router container for the 3 speech tabs (view-speech, submit-speech and search-speech)
 */
@Component({
  selector    : 'app-speech',
  templateUrl : './speech.component.html',
  styleUrls   : ['./speech.component.scss']
})
export class SpeechComponent implements OnInit, AfterViewInit {
  
  /**
   * A variable that is an instance of a Tab that will be used to store the tab lists.
   *
   * @type {Tab[]}
   */
  speechTabs: Tab[] = tabs;
  
  /**
   * Fetches the container's TabsetComponent child that is created from Ngx-Bootstrap and placed on the SpeechComponent
   *
   * @type {TabsetComponent}
   */
  @ViewChild(TabsetComponent) tabSet: TabsetComponent;
  
  /**
   * @param {Router} router         - used for subscribing its route change events
   * @param {ChangeDetectorRef} cdr - used to register new update if there's any data assignment performed inside the ngAfterViewInit
   */
  constructor(private router: Router,
              private cdr: ChangeDetectorRef) { }
  
  /**
   * A function that peforms an initial call to the checkCurrentUrl() to subscribe with route changes and perform its designated action.
   */
  ngOnInit(): void {
    this.checkCurrentUrl();
  }
  
  /**
   * After the view has been rendered, we then call the setActiveTabByCurrentUrl() to activate the current tab based on the current url
   */
  ngAfterViewInit(): void {
     this.setActiveTabByCurrentUrl();
  }
  
  /**
   * A function that is responsible on checking & subscribing to the route changes and filters them if it encountered /speech/submit-speech,
   * after which will call the setActiveTabByCurrentUrl and passed its filtered submit-speech url
   */
  checkCurrentUrl(): void {
    this.router
      .events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        filter(({ url }: any) => url === '/speech/submit-speech')
      )
      .subscribe(({ url }: any) => this.setActiveTabByCurrentUrl(url));
  }
  
  /**
   * A function that is responsible on setting an active tab based on its current url
   *
   * @param {string} url - the current url
   */
  setActiveTabByCurrentUrl(url?: string): void {
    const currentUrl   = url ? url : this.router.url;
    const transformUrl = currentUrl.split('/')[2];
    
    this.speechTabs.map((speech, index) => this.tabSet.tabs[index].active = speech.url === transformUrl);
    this.cdr.detectChanges();
  }
}
