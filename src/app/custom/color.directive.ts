import { Directive,ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
    selector : "[colorchange]"
})


export class ColorDirective implements OnInit
{
  constructor(private _eleRef:ElementRef){}

  ngOnInit()
  {
     this._eleRef.nativeElement.style.backgroundColor = "Red";
  }

  @HostListener("mouseover") first()
  {
    this._eleRef.nativeElement.style.backgroundColor = "Blue";
  }

  @HostListener("mouseout") second()
  {
    this._eleRef.nativeElement.style.backgroundColor = "Yellow";
  }
}