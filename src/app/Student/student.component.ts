import { Component,OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './Student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit 
{
  constructor(private ss:StudentService) 
  { 

  }
  students:any[] = [];
  stuUpdateForm :any;
  student:any=[];

  ngOnInit(): void
  {
    // if(//token == null)
    // {
    //   //redirect to login
    // }

    this.stuUpdateForm = new FormGroup({
      Name: new FormControl(),
      Email: new FormControl(),
      PhoneNo:new FormControl()
    });
    //call the service
    // console.log("1");
    this.ss.GetAllStudents().subscribe(data=>{
      this.students = <any[]> data;

      console.log(this.students);
      // this.students = this.students.filter(stu=>stu.isActive!=false);
    },err=>{
          console.log(err);
    })
    // console.log("2");
  }
  Delete(id:any)
  {
    this.ss.DeleteStudent(id).subscribe(data=>{
      if(data == true)
      {
        this.ngOnInit();
      }
    },err=>{
      console.log(err);
    });
  }
  EditForm()
  {
    this.ss.UpdateStudent(this.student).subscribe(da=>{
      console.log(da);
    },err=>{
      console.log(err);
    })
  }
  Update(stu:any)
  {
    this.student = stu;
    console.log(this.student);
  }
}
