import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DoctorModel } from 'src/app/Model';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctor:DoctorModel={name:'',address:"",city:"",imgUrl:"",nobatType:"",Specialty:[],star:0}; 
  constructor(public elementref:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
   
  }

  @HostListener('mouseenter') onMouseEnter(){
    //alert('dwed');
    // font-weight: 900;
    // font-size: small;
    // color: #646464;
    // const doctorCard =this.elementref.nativeElement;
    // //  const cityBadge=doctorCard.closest('.city-badge');  
    // const cityBadge=this.elementref.nativeElement;  
    // console.log(cityBadge);
    // console.log(this.elementref.nativeElement);
    // const box = document.getElementsByClassName('city-badge');
    // box.style.display = 'none';
    // console.log(box);

  }

}
