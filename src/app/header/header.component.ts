import { Component } from '@angular/core';
import {Directive, HostBinding, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 
@Directive({
  selector: '[appHamburgerToggle]'
})

  @HostBinding('class.is-active')
  private isActive = false;

  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}


