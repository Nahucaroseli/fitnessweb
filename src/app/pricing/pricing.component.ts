import { Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from './Subscription';




@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']

})

export class PricingComponent {

  constructor(private sub:SubscriptionService){
  this.clicked = false;
  }


  subscription: Subscription[] = []
  clicked:boolean

  ngOnInit():void {

    this.subscription = [
      {
        name:'Basic',
        price: 20,
        description: [
          "personal training",
          "cardio exercise",
          "weight lifting"
        ]
    },
    {
      name:'Standard',
        price: 50,
        description: [
          "personal training",
          "cardio exercise",
          "weight lifting",
          "diet plans"
        ]
    },
    {
      name:'Plus',
        price: 75,
        description: [
          "personal training",
          "cardio exercise",
          "weight lifting",
          "diet plans",
          "overall results"
        ]
    },
    {
      name:'Pro',
        price: 90,
        description: [
          "personal training",
          "cardio exercise",
          "weight lifting",
          "diet plans",
          "overall results",
          "protein powder"
        ]
    }
    ]

  
    
    
  }

  subscribe(sub:any){
    this.sub.Subs(sub);
    this.clicked = true;
  }

  setButtonState(element,text,flag){
    if(flag==true){
       element.textContent = text;
    }
   
 
  }

}
