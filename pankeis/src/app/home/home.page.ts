import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentPosition: string = "No position available";
  constructor() {}

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentPosition = `Latitude:  + ${coordinates.coords.latitude} \n  Longitude:  ${coordinates.coords.longitude}`; 
    console.log('Current position:', coordinates);
  };

}
