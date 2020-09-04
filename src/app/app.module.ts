import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { KnotComponent } from './knot/knot.component';
import { ForgetComponent } from './forget/forget.component';
import { VendorComponent } from './vendor/vendor.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DestinationComponent } from './destination/destination.component';
import { PortpolioComponent } from './portpolio/portpolio.component';
import { FoodComponent } from './food/food.component';
@NgModule({
  declarations: [
    AppComponent,
    KnotComponent,
    ForgetComponent,
    VendorComponent,
    SignupComponent,
    HomeComponent,
    DashComponent,
    AboutComponent,
    DestinationComponent,
    PortpolioComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
