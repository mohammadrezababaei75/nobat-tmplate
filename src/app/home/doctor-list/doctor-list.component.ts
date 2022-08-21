import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { city, DoctorModel, Specialty } from '../../Model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  @Input() title:string;
  @Input() type:string;
  @Input() city:city={name:"",slug:""};
  @Input() doctors:DoctorModel[];
  //@Input() Specialties : Specialty[];
  //@Input() doctor:DoctorModel;
  
  
  constructor(private mService :MainService) {
    this.title="";
    this.type="اینترنتی";
    this.doctors=mService.doctors;
    // this.city=mService.cities[0];
    // this.city={name:"کرج",slug:"صب"};;
    //this.Specialties=mService.Specialties;
   }

  ngOnInit(): void {
  }


}
