import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-navbar></app-navbar>
  <div colorchange>
  this div is for Directive test
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipkart';
  
  message : any;
  Display(arg:any)
  {
    this.message = arg;
  }

}
