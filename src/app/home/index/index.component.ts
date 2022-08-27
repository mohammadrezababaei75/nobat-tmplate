import { Component, OnInit } from '@angular/core';
import { area, city } from 'src/app/Model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  city:city={name:"",slug:""}
  cities:city[]=[]
  areas:area[]=[]
  area:area//={name:"",slug:"",citySlug:""}
  constructor(private mService:MainService) { 
    this.cities=mService.cities;
    this.city=this.cities[0];
    this.areas=mService.areas;
    this.area=this.areas[0];
  }
  
  ngOnInit(): void {
  }
  
  setCity(city:city){
    console.log(city)
    this.city=city;
    this.mService.onSelectCity(city.slug);
    //this.cities=this.mService.cities;
    //this.city=this.cities[0];
  }
}
