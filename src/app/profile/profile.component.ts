import { Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public sub: any
  public flag:boolean
  constructor(private subscription:SubscriptionService){
    this.sub = null;
    this.flag= this.subscription.isSubscribed
  }


  ngOnInit(){
    this.subscription.getSubscription().subscribe(res=>{
      this.sub = res;
    })

  }
}
