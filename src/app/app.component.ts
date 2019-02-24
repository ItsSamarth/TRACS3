import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

import { Aircraft } from "./shared/aircraft";
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  aircraft: Aircraft[];
  title = 'TRACS3';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
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
  }
}
