import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './forget/forget.component';
import { KnotComponent } from './knot/knot.component';
import { SignupComponent } from './signup/signup.component';
import { VendorComponent } from './vendor/vendor.component';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AboutComponent } from './about/about.component';
import { DestinationComponent } from './destination/destination.component';
import { PortpolioComponent } from './portpolio/portpolio.component';
import { FoodComponent } from './food/food.component';


const routes: Routes = [
  { path: 'HomePage', component: HomeComponent },
  {path:'ForgetPage', component:ForgetComponent},
  {path:'LoginPage',component:KnotComponent},
  {path:'SignupPage',component:SignupComponent},
  {path:'VendorLoginPage',component:VendorComponent},
  {path:'dashboard',component:DashComponent},
  {path:'AboutUs',component:AboutComponent},
  {path:'destination',component:DestinationComponent},
  {path:'port',component:PortpolioComponent},
  {path:'food',component:FoodComponent},
  {path:'',redirectTo:'/HomePage', pathMatch:'full'},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
