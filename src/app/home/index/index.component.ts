import { Component, OnInit , Input } from '@angular/core';
import { area, city, DoctorModel, Specialty, SubSpecialty } from 'src/app/Model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  subSpecialties:SubSpecialty[]=[];
  city:city={name:"",slug:""}
  cities:city[]=[]
  areas:area[]=[]
  subSpecialtyLink:SubSpecialty['link']
  area:area//={name:"",slug:"",citySlug:""}
  specialty:Specialty;
  @Input() doctors:DoctorModel[];
  constructor(private mService:MainService) { 
    this.cities=mService.cities;
    this.city=this.cities[0];
    this.areas=mService.areas;
    this.area=this.areas[0];
    this.doctors=mService.doctors;
    this.subSpecialties=mService.subspecialties;
    this.subSpecialtyLink=mService.fSubSpecialty;
    this.specialty=mService.specialty;
    this.setPage(0);
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
  setPage(pageNumber:number){
    this.mService.Page(pageNumber);
    this.doctors=this.mService.doctors;
  }
  SelectSpecialty(specialty:Specialty){
    this.mService.s_onSelectSpecialty(specialty.link);
    this.subSpecialties=this.mService.subspecialties;
    this.subSpecialtyLink=this.mService.fSubSpecialty;
    this.specialty=this.mService.specialty;  
    console.log(this.specialty);
  }
  SelectSubSpecialty(subSpecialty:SubSpecialty){
    this.mService.s_onSelectSubSpecialty(subSpecialty.link);
    this.subSpecialtyLink=this.mService.fSubSpecialty;
    console.log(this.subSpecialtyLink);
  }
}
