import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h3>Child Component</h3>

  Child text box : <input type="text" #CT />
  <button (click)="SendToParent(CT.value)">Send to Parent</button> <br>

  Step1 : Child Component will raise on Event <br>
  Step2 : Parent Component will catch that event <br>
  Step3 : Parent Component will retrieve the value <br>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // @Input() parentValue : any;
  @Output() childEvent = new EventEmitter<string>();

  SendToParent(arg:any)
  {
    this.childEvent.emit(arg);
  }

  ngOnInit(): void {
  }

}


