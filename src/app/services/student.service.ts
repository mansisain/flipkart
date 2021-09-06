import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()

export class StudentService
{
    constructor(private httpClient: HttpClient)
    {

    }
    GetAllStudents()
    {
        //Web API
        return this.httpClient.get("http://www.angularclasses.com/Student/GetAllStudents")
    }

    DeleteStudent(id:any)
    {
       return this.httpClient.get("http://www.angularclasses.com/Student/DeleteStudent/"+id);
    }
    CreateStudent(formJson:any){
        return this.httpClient.post("http://www.angularclasses.com/Student/CreateStudent",formJson);
    }
    UpdateStudent(formJson:any){
        return this.httpClient.post("http://www.angularclasses.com/Student/UpdateStudent",formJson)
    }

}