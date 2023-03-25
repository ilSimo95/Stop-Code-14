import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  currentURL: string = window.location.href;
  pattern1 = /\d$/ ;  
  pattern2 = /(albums)$/;

  constructor(private location: Location) {}

  routingRedirect():void {
    if (this.pattern1.test(this.currentURL)) {
      this.location.back();
    }
    else if (this.pattern2.test(this.currentURL)) {
      window.location.href = this.currentURL;
    }
    else {
      window.location.href = this.currentURL + "/albums";
    }
  }

}
