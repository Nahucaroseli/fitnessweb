import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { Subscription } from './Subscription';




@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']

})

export class PricingComponent {

  public product:any;
  constructor(){

  }


  subscription: Subscription[] = []

  ngOnInit():void {

    this.subscription = [
      {
        name:'Basic Plan',
        price: 30,
        description: [
          "personal training",
          "cardio exercise",
          "weight lifting",
          "diet plans",
          "overall results"
        ]
    },
    {
      name:'Premium Plan',
        price: 90,
        description: [
          "personal training",
          "cardio exercise",
          "weight lifting",
          "diet plans",
          "overall results"
        ]
    }
    ]

    this.product = {
      name:"",
      price:"",
    }
    
    
    
  }
}
