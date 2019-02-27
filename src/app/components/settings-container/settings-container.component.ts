import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import { AppSettings } from '../../shared/app-settings'
import { AppSettingsService } from '../../services/app-settings.service';
import { APPSETTINGS } from '../../shared/defaultSettings';

@Component({
  selector: 'app-settings-container',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss']
})
export class SettingsContainerComponent implements OnInit {

  @Input()
  defaultSettings: APPSETTINGS;

  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' }
  ];

  @Input()
  title: string;

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit() {  
    console.log('settings title, ', this.title);
    console.log('settings: ', this.defaultSettings)
    //this.appSettingsService.getSettings()
      //.subscribe(console.log(defaultSettings),
        //() => null,
        //() => {
          //console.log('settings: ', this.settings);
        //});
    console.log('settings, stickyHeader: ', this.settings.stickyHeader);  
  }

  onStickyHeaderToggle( event ) {
    this.settings.stickyHeader = event.checked;
    console.log('stickyHeader toggle, event=', event, ' stickyHeader=', this.settings.stickyHeader);;
  }

  onDisplayBreadcrumbsToggle( event ) {
    this.settings.displayBreadcrumbs = event.checked;
    console.log('stickyHeader toggle, event=', event, ' displayBreadcrumbs=', this.settings.displayBreadcrumbs);;
  }

  oncClearCheckboxesOnOpenToggle( event ) {
    this.settings.clearCheckboxesOnOpen = event.checked;
    console.log('stickyHeader toggle, event=', event, ' clearCheckboxesOnOpen=', this.settings.clearCheckboxesOnOpen);;
  }

  onDisplayLegendToggle( event ) {
    this.settings.displayLegend = event.checked;
    console.log('stickyHeader toggle, event=', event, ' DisplayLegend=', this.settings.displayLegend);;
  }

  onAutoNightModeToggle( event ) {
    this.settings.autoNightMode = event.checked;
    console.log('autoNightMode toggle, event=', event, ' autoNightMode=', this.settings.autoNightMode);;
  }

  onAnimateWholePageTransitionToggle( event ) {
    this.settings.animateWholePageTransition = event.checked;
    console.log('stickyHeader toggle, event=', event, ' animateWholePageTransition=', this.settings.animateWholePageTransition);;
  }

  onPageElementsSlideUpToggle( event ) {
    this.settings.pageElementsSlideUp = event.checked;
    console.log('pageElementsSlideUp toggle, event=', event, ' pageElementsSlideUp=', this.settings.pageElementsSlideUp);;
  }


}
