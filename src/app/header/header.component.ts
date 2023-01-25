import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 
    menuVariable:boolean = false;
    menuIcon:boolean = false

    toggleMenu(){
      this.menuVariable =! this.menuVariable;
      this.menuIcon =! this.menuIcon;
    }

 
}


