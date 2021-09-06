import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name : "TEPIPE",
    pure : false,
})


export class AppendTEPipe implements PipeTransform
{
    transform(arg1:any,arg2:any){
        console.log("1");
        return "TE - "+ arg1 + arg2;
    }
}