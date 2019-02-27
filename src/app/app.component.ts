import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AppSettings } from './shared/app-settings'
import { APPSETTINGS } from './shared/defaultSettings';

import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import { Aircraft } from "./shared/aircraft";
import { Content } from '@angular/compiler/src/render3/r3_ast';
import {TitleService } from './services/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  aircraft: Aircraft[];
  title = 'TRACS3';
  isAuthenticated$:         Observable<boolean>;
  settings: AppSettings = APPSETTINGS;



  constructor(
    private titleService: TitleService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
    ){
    this.matIconRegistry.addSvgIcon(
      "historical-tracking-black-48",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/historical-tracking-black-48.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "historical-tracking-black-48-inactive",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/historical-tracking-black-48-inactive.svg")
    );
  } 

  ngOnInit(){
    this.titleService.init();
  }
}
