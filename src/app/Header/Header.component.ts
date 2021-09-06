import { Component } from "@angular/core"

@Component({
    selector: "app-header",
    template: `
    <input type="text" placeholder="Enter Name" #FName />
    <button (click)="Display(FName.placeholder)">Save</button><br>
    {{name | uppercase}}<br>
    {{salary | currency : 'USD' : false}}<br>
    {{salary | number : '2.2-2'}}<br>
    {{todayDate | date : 'dd-MM-YYYY'}}<br>
    {{empid | TEPIPE : 'TEST'}}<br>
    <button (click)="Test()">Save</button>
    {{mynumber | percent}}

    `
})
export class HeaderComponent {
    name: string = "Mansi Sain";
    email: string = "mansi@gmail.com";
    phoneNo: string = "9898766566";
    imgAddress: string = "https://angular.io/assets/images/logos/angular/shield-large.svg";
    age: number = 19;
    salary: number = 45.777;
    test: boolean = false;
    abc: any = true;
    todayDate = new Date()
    empid:string = "12345";
    mynumber:number = 0.34543;

    Display(arg1:any)
     {
        alert(arg1);
    }
    Test()
    {
        
    }
}
