import { Component } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public sub: any
  public flag:boolean
  public payPalConfig ? : IPayPalConfig;
  checkout:boolean;
  constructor(private subscription:SubscriptionService){
    this.sub = null;
    this.flag= this.subscription.isSubscribed;
    this.checkout = this.subscription.isPaid;
  }

  ngOnInit(){
    this.initConfig();
    this.subscription.getSubscription().subscribe(res=>{
      this.sub = res;
    })
  }

  getSub(){
    const items: any[] = [];
    let item = {};
    item = {
      name: this.sub.name,
      quantity:'1',
      unit_amount:{value:this.sub.price, currency_code:'USD'}

    }
    items.push(item);
    return items;
  }

  private initConfig(): void {
    
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'Ab8V5nQMmytfOUFb8GM2njDYTIV-tojPlsaLBSy-mZkQDkvfYMH4BWVeiMlcAw6xC5tkH1pQywEgb31X',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: this.sub.price.toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'USD',
                            value: this.sub.price.toString()
                        }
                    }
                },
                items: this.getSub()
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'horizontal',

            
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });
            this.subscription.isPaid= true;

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
    

        },
        onError: err => {
            console.log('OnError', err);
   
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
         
        }
    };
}
}
