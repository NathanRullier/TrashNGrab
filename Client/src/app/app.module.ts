import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagePresentationComponent } from './page-presentation/page-presentation.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';

import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent} from './home-page/home-page.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PagePresentationComponent,
    ProductComponent,
    AboutComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD4w4AH-yl2Uc5t1ONtdPjMxlLVI8ImyxI'
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
