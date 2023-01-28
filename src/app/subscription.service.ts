import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  public subscription: any;
  public isSubscribed:boolean = false;
  public isPaid:boolean=false;
  public productsub = new BehaviorSubject<any>([]);
  constructor() { }



  getSubscription(){
    return this.productsub.asObservable();
  }

  Subs(sub:any){
    this.subscription = sub
    this.isSubscribed = true;
    this.isPaid = false;
    this.productsub.next(this.subscription)
  }
}
