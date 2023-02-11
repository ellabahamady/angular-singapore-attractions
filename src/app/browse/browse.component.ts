import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';

import { DataService } from '../service/data.service';
import { Attraction } from '../model/attraction';
import { DetailComponent } from '../layout/detail/detail.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  active = ''; // selected attraction
  defaultCenter = { lat: 1.2913, lng: 103.8502 }; // default map
  defaultZoom = 14.5; // default map zoom

  center = this.defaultCenter;
  zoom = this.defaultZoom;
  info = ""; // info window content
  icon = "../../assets/img/icon-pin.png";
  data: Attraction[] = [];

  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;
  @ViewChild(DetailComponent) detail!: DetailComponent;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  // Get list data attraction
  getData(): void{
    this.data = [];
    this.dataService.getData(
      (data) => {
        this.data = data;
      }
    )
  }

  // Get detail data attraction
  getDetail(attraction: Attraction, marker: any): void{
    this.detail.loadDetail(attraction); // show detail data
    this.active = attraction.id.toString(); // highlight selected attraction
    this.center = { lat: attraction.position.lat, lng: attraction.position.lng }; // set center of the map
    this.zoom = 17; // set zoom of map
    this.info = attraction.name + " - " + attraction.address; // set info window content
    this.infoWindow.close();
    this.infoWindow.open(marker);
  }

  // Close attraction detail and reset map
  closeDetail(): void{
    this.detail.closeDetail();
    this.active = "";
    this.center = this.defaultCenter;
    this.zoom = this.defaultZoom;
    this.infoWindow.close();
  }
}
