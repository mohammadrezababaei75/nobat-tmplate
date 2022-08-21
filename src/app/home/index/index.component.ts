import { Component, OnInit } from '@angular/core';
import { city } from 'src/app/Model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  city:city={name:"",slug:""}
  constructor(private mService:MainService) { 
    this.city=mService.cities[0];
  }

  ngOnInit(): void {
  }

  setCity(city:city){
    console.log(city)
    this.city=city;
  }
}
