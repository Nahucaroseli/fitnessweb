import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { PricingComponent } from './pricing/pricing.component';


const routes : Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeSectionComponent},
  {path:'profile',component:ProfileComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
