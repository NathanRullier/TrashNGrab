import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component( {
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [ './map.component.css' ]
} )
export class MapComponent implements OnInit {
  constructor ( private http: HttpClient ) {

  }
  lat: number = 45.5088400;
  lng: number = -73.5878100;
  keyAPI: string = "AIzaSyD4w4AH-yl2Uc5t1ONtdPjMxlLVI8ImyxI";
  public href: string = "";
  
  test = [ ];
  ngOnInit () {
      this.http.get( 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyD4w4AH-yl2Uc5t1ONtdPjMxlLVI8ImyxI' ).subscribe( data => {
      console.log(data);
      //this.test.push([data.results[0].geometry.location.lat, data.results[0].geometry.location.lng]);
      
    },
      err => {
        console.log( "Oops!" );
      } );
  }

}

