import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { city, DoctorModel } from '../../Model';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  @Input() title:string;
  @Input() type:string;
  @Input() city:city={name:"",slug:""};

  doctors : DoctorModel[]=[
    {
      name:"دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"دکتر الهه",
      Specialty:[
        {name:"دندانپزشکی",link:"https://mdra.ir"},
        {name:"گوش و حلق و بینی",link:"https://mdra.ir/gosh"}],
      city:"تهران",
      address:"تهران ، ولیعصر",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/227798",
      star:3
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"دکتر الهه",
      Specialty:[
        {name:"دندانپزشکی",link:"https://mdra.ir"},
        {name:"گوش و حلق و بینی",link:"https://mdra.ir/gosh"}],
      city:"تهران",
      address:"تهران ، ولیعصر",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/227798",
      star:3
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"دکتر الهه",
      Specialty:[
        {name:"دندانپزشکی",link:"https://mdra.ir"},
        {name:"گوش و حلق و بینی",link:"https://mdra.ir/gosh"}],
      city:"تهران",
      address:"تهران ، ولیعصر",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/227798",
      star:3
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر الهه",
      Specialty:[
        {name:"دندانپزشکی",link:"https://mdra.ir"},
        {name:"گوش و حلق و بینی",link:"https://mdra.ir/gosh"}],
      city:"تهران",
      address:"تهران ، ولیعصر",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/227798",
      star:3
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر الهه",
      Specialty:[
        {name:"دندانپزشکی",link:"https://mdra.ir"},
        {name:"گوش و حلق و بینی",link:"https://mdra.ir/gosh"}],
      city:"تهران",
      address:"تهران ، ولیعصر",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/227798",
      star:3
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
  ];
  constructor() {
    this.title="";
    this.type="اینترنتی";
   }

  ngOnInit(): void {
  }


}
