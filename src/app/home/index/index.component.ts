import { Component, OnInit } from '@angular/core';
import { city } from 'src/app/Model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  city:city={name:"",slug:""}
  constructor() { }

  ngOnInit(): void {
  }

  setCity(city:city){
    console.log(city)
    this.city=city;
  }
}
