import { Target } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { area, city, Specialty, SubSpecialty } from 'src/app/Model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
  @Input() cities:city[]=[];
  @Input() city:city={name:"",slug:""};
  @Input() areas:area[]=[];
  @Input() area:area={name:"",slug:"",citySlug:""};
  @Input() subSpecialties:SubSpecialty[]=[];
  @Output() onSelectCity=new EventEmitter;
  @Output() onSelectSpecialty=new EventEmitter;
  citySearchWord:string='';
  areaSearchWord:string='';
  
  //cities:city[]=[];
  Specialties:Specialty[];
  //areas:area[];
  //city:city={name:"",slug:""};
  //area:area;
  
  constructor(private mService :MainService) { 
    this.Specialties=mService.Specialties;
    //@Input() area:area=areas[0];
    //this.cities=mService.cities;
    //this.areas=mService.areas;
    //this.city=this.cities[0];
    //this.area=this.areas[0];
  }

  ngOnInit(): void {
  }

  SelectInput(isCity:boolean,event:Event) {
    if(isCity)
      this.citySearchWord=(event.target as HTMLInputElement).value;
    else
      this.areaSearchWord=(event.target as HTMLInputElement).value;
  }

  searched(type:Number,word:string):boolean{
    if(type==1){
      if(word.includes(this.citySearchWord) || this.citySearchWord=='')
      return true;
    }else{
      if(word.includes(this.areaSearchWord) || this.areaSearchWord=='')
      return true;
    }
    return false;
  }

  selectItem(isCity:boolean,slug:string){
    if(isCity){
      this.cities.forEach(element => {
        if(element.slug==slug)
        {
          this.city=element;
          this.onSelectCity.emit(element)
          this.areas=this.mService.areas;
          this.area=this.areas[0];
          document.getElementById('closeCityOffCanvas')?.click();
          return
        }
      });
      
    }else{
      this.areas.forEach(element => {
        if(element.slug==slug)
        {
          this.area=element;
          document.getElementById('closeAreaOffCanvas')?.click();
          return
        }
      });
    }
  }


  selectSpecialty(isSpecialty:boolean,link:string){
    if(isSpecialty){
      this.Specialties.forEach(element => {
        if(element.link==link)
        {
          //this.city=element;
          this.onSelectSpecialty.emit(element)
          // this.areas=this.mService.areas;
          // this.area=this.areas[0];
          // document.getElementById('closeCityOffCanvas')?.click();
          return
        }
      });
      
    }else{
      this.areas.forEach(element => {
        if(element.slug==link)
        {
          this.area=element;
          document.getElementById('closeAreaOffCanvas')?.click();
          return
        }
      });
    }
  }
}
