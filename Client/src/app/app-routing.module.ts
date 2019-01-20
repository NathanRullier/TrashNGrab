import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent} from './home-page/home-page.component';
import {PagePresentationComponent} from './page-presentation/page-presentation.component';
import {LoginClientComponent} from './login-client/login-client.component';
import {LoginSupplierComponent} from './login-supplier/login-supplier.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
 
  //{ path: 'toLogin', component: PagePresentationComponent},
  { path: 'toAbout', component: AboutComponent },
  { path: 'toProduct', component: ProductComponent },
  { path: 'toHome', component: HomePageComponent },
  { path: 'toLoginSupplier', component: LoginSupplierComponent },
  { path: 'toLoginClient', component: LoginClientComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
