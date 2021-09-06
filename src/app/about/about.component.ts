import { Component,OnInit } from '@angular/core'
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  providers: [CountryService]
})

export class AboutComponent implements OnInit
{
  constructor(private _cs:CountryService)
  {

  }
  country:any[]=[];
  ngOnInit()
  {
    this.country = this._cs.GetCountryData();
    console.log(this.country);
    
  }
  
}
