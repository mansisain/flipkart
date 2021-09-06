import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:any;
  Countries :any[] = [
    {CID:1,CName:"India"},
    {CID:2,CName:"USA"},
    {CID:3,CName:"UK"},
  ];

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      Name:new FormControl("Mansi",Validators.required),
      Email:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      PhoneNo:new FormControl(),
      Country:new FormControl()
  })

}

Save()
 {
  console.log(this.contactForm.value);
 }
}

