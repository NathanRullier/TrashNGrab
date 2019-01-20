import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagePresentationComponent } from './page-presentation/page-presentation.component';
import { MapComponent } from './map/map.component';
import { HomePageComponent } from './home-page/home-page.component';


import { AgmCoreModule } from '@agm/core';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PagePresentationComponent,
    HomePageComponent,
    MapComponent,
    PagePresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD4w4AH-yl2Uc5t1ONtdPjMxlLVI8ImyxI'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
