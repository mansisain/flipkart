import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  CreateStudentForm:any;
  constructor(private ss:StudentService){

  }

  ngOnInit(): void {
    this.CreateStudentForm = new FormGroup({
      Name:new FormControl(null,Validators.required),
      Email:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.email]),
      PhoneNo:new FormControl(null,[Validators.required]),
    })
  }
  Create(){
    this.CreateStudentForm.value.isActive = true;
    this.ss.CreateStudent(this.CreateStudentForm.value).subscribe(da=>{
      console.log(da);
    },err=>{
      console.log(err);
    })
}
}

