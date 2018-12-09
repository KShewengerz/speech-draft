import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { TabsetComponent } from 'ngx-bootstrap';

import { filter } from 'rxjs/operators';

import { Tab, tabs } from '@app/speech/containers/speech/speech.data';


@Component({
  selector    : 'app-speech',
  templateUrl : './speech.component.html',
  styleUrls   : ['./speech.component.scss']
})
export class SpeechComponent implements OnInit, AfterViewInit {
  
  speechTabs: Tab[] = tabs;
  
  @ViewChild(TabsetComponent) tabSet: TabsetComponent;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.checkCurrentUrl();
  }
  
   ngAfterViewInit(): void {
     this.setActiveTabByCurrentUrl();
  }
  
  checkCurrentUrl(): void {
    this.router
    .events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      filter(({ url }: any) => url === '/speech/submit-speech')
    )
    .subscribe(({ url }: any) => this.setActiveTabByCurrentUrl(url));
  }
  
  setActiveTabByCurrentUrl(url?: string): void {
    const currentUrl   = url ? url : this.router.url;
    const transformUrl = currentUrl.split('/')[2];
    
    this.speechTabs.map((speech, index) => this.tabSet.tabs[index].active = speech.url === transformUrl);
    this.cdr.detectChanges();
  }
}
