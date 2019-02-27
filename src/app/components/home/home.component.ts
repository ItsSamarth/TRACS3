import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  map: Map;

  _center: LngLat;

  //refs
  _mapRef: Map;

  @Output()
  centerChange: EventEmitter<LngLat> =  new EventEmitter;

  @Input()
  set zoom(z: number) {
    this._zoom = z;
    if(this.index === 0) {
      this.zoomChange.emit(this._zoom);
    }
  }
  @Output()
  zoomChange : EventEmitter<number> = new EventEmitter;
  _zoom: number;

  @Input()
  index: number;

  constructor() { }

  ngOnInit() {
    this.zoom = 11;
    this._center = new LngLat( -121.31209, 37.449904  );
    console.log('this._center: ', this._center);

  }
  ngOnChanges(changes) {
    console.log('changes: ', changes);
    if (!changes) {
      return;
    }
     
  }
  loadMap( map: Map) {
    console.log("Initializing map, _center: ", this._center);
    console.log("map: ", map);
    this._mapRef = map;
    console.log("Loading map data");
    this._center = map.getCenter();
    console.log('this._center from map: ', this._center);
  }

}
