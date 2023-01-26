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
