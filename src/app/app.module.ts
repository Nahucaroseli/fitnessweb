import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPayPalModule } from 'ngx-paypal/public_api';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamSectionComponent } from './team-section/team-section.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    PricingComponent,
    TeamSectionComponent

  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
