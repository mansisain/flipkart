import { Injectable } from "@angular/core";

@Injectable()
export class CountryService{
    GetCountryData()
    {
        return [
            {CID:1,CName:"India"},
            {CID:2,CName:"USA"},
            {CID:3,CName:"UK"}
        ];
    }
}