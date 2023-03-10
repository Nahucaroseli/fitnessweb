import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { PricingComponent } from './pricing/pricing.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';


//external
import { NgxPayPalModule } from 'ngx-paypal';
import { RoutinesComponent } from './profile/routines/routines.component';
import { TrainersComponent } from './profile/trainers/trainers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeSectionComponent,
    PricingComponent,
    TeamSectionComponent,
    ProfileComponent,
    RoutinesComponent,
    TrainersComponent

  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
