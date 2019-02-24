import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Aircraft } from '../shared/aircraft';

interface aircraftData {
  aircraft: Aircraft[];
}

@Injectable({
  providedIn: 'root'
})
export class AircraftInfoService {

  constructor(private http: HttpClient) { }
}
