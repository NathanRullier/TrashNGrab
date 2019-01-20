import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent} from './home-page/home-page.component';
import {PagePresentationComponent} from './page-presentation/page-presentation.component';


const routes: Routes = [
 
  { path: 'toLogin', component: PagePresentationComponent},
  { path: 'toAbout', component: AboutComponent },
  { path: 'toProduct', component: ProductComponent },
  { path: 'toHome', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
