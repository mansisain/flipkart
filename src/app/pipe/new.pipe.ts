import { Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name : 'MSPIPE',
})

export class NewMSPipe implements PipeTransform
{
    transform(arg1:any){
        return "MS - "+ arg1;
    }

}