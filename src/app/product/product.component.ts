import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  products:any[]=[
    {PID:1,PName:'Timex',PPrice:2000,PImage:'/assets/1.jpg'},
    {PID:2,PName:'Rolex',PPrice:5000,PImage:'/assets/2.jpg'},
    {PID:3,PName:'Addiction',PPrice:3000,PImage:'/assets/3.jpg'},
    {PID:4,PName:'Xenlex',PPrice:8000,PImage:'/assets/4.jpg'}
  ]

  ngOnInit(): void {
  }
  SP(arg:any)
  {
    if(arg=="")
    {  
      this.products = [
      {PID:1,PName:'Timex',PPrice:2000,PImage:'/assets/1.jpg'},
      {PID:2,PName:'Rolex',PPrice:5000,PImage:'/assets/2.jpg'},
      {PID:3,PName:'Addiction',PPrice:3000,PImage:'/assets/3.jpg'},
      {PID:4,PName:'Xenlex',PPrice:8000,PImage:'/assets/4.jpg'}

    ];
    }
    else{
    this.products = this.products.filter(p=>p.PName.toUpperCase().startsWith(arg.toUpperCase()));
    }
  }

}
