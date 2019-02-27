import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AppSettings } from '../shared/app-settings';
import { APPSETTINGS } from "../shared/defaultSettings";

@Injectable()
export class AppSettingsService {
  getSettings(): Observable<AppSettings> {
    let settings =  APPSETTINGS;
    return Observable.of<AppSettings>(settings);
  }
}