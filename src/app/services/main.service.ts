import { Injectable } from '@angular/core';
import { area, city, DoctorModel, Specialty, SubSpecialty } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  doctors : DoctorModel[]=[
    
  ];
  tmpdoctors : DoctorModel[]=[
    {
      name:"1 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"2 دکتر الهه",
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
      name:"3 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"4 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"5 دکتر الهه",
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
      name:"6 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"7 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"8 دکتر الهه",
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
      name:"9 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"10 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"11 دکتر الهه",
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
      name:"12 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"13 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"14 دکتر الهه",
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
      name:"15 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"16 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"1 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"2 دکتر الهه",
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
      name:"3 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"4 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"5 دکتر الهه",
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
      name:"6 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"7 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"8 دکتر الهه",
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
      name:"9 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"10 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"11 دکتر الهه",
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
      name:"12 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"13 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"14 دکتر الهه",
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
      name:"15 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"16 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"1 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"2 دکتر الهه",
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
      name:"3 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"4 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"5 دکتر الهه",
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
      name:"6 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"7 دکتر راد",
      Specialty:[{name:"دندانپزشکی",link:"https://mdra.ir"}],
      city:"کرج",
      address:"کرج ، جهانشهر ، خیابان 13 ، پلاک 3",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/119883",
      star:5
    },
    {
      name:"8 دکتر الهه",
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
      name:"9 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"10 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"11 دکتر الهه",
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
      name:"12 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"13 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"14 دکتر الهه",
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
      name:"15 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"تلفنی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
    {
      name:"16 دکتر قشمی",
      Specialty:[],
      city:"کاشان",
      address:"کاشان ، فلکه دوم ، خیابان انصار ، ساختمان آفتاب",
      nobatType:"اینترنتی",
      imgUrl:"https://mystatic.ir/v1/doctor/profile_photo/218090",
      star:4
    },
  ];

  Specialties : Specialty[]=[
    {name:"تغذیه",link:"taghzie"},
    {name:"عمومی",link:"omomi"},
    {name:"عفونی",link:"https://site.com/spe/ofoni"},
    {name:"قلب و عروق",link:"https://site.com/spe/ghalb"},
    {name:"فیزیوتراپی",link:"https://site.com/spe/fiziotrapy"},
    {name:"داخلی",link:"https://site.com/spe/dakheli"},
    {name:"تغذیه",link:"https://site.com/spe/taghzie"},
    {name:"عمومی",link:"https://site.com/spe/omomi"},
    {name:"عفونی",link:"https://site.com/spe/ofoni"},
    {name:"قلب و عروق",link:"https://site.com/spe/ghalb"},
    {name:"فیزیوتراپی",link:"https://site.com/spe/fiziotrapy"},
    {name:"داخلی",link:"https://site.com/spe/dakheli"},
    {name:"تغذیه",link:"https://site.com/spe/taghzie"},
    {name:"عمومی",link:"https://site.com/spe/omomi"},
    {name:"عفونی",link:"https://site.com/spe/ofoni"},
    {name:"قلب و عروق",link:"https://site.com/spe/ghalb"},
    {name:"فیزیوتراپی",link:"https://site.com/spe/fiziotrapy"},
    {name:"داخلی",link:"https://site.com/spe/dakheli"},
    {name:"تغذیه",link:"https://site.com/spe/taghzie"},
    {name:"عمومی",link:"https://site.com/spe/omomi"},
    {name:"عفونی",link:"https://site.com/spe/ofoni"},
    {name:"قلب و عروق",link:"https://site.com/spe/ghalb"},
    {name:"فیزیوتراپی",link:"https://site.com/spe/fiziotrapy"},
    {name:"داخلی",link:"https://site.com/spe/dakheli"},
  ];
  specialty:Specialty={name:'',link:''}
  
  cities : city[]=[
    {name:"کرج",slug:"karaj"},
    {name:"تهران",slug:"tehran"},
    {name:"اصفهان",slug:"esfahan"},
    {name:"مشهد",slug:"mashhad"},
    {name:"قم",slug:"ghom"},
    {name:"قزوین",slug:"ghazvin"},
    {name:"کرمان",slug:"kerman"},
  ]
  
  areas : area[]=[
    
    // {name:"عظیمیه",slug:"azimieh",citySlug:"karaj"},
    // {name:"گوهردشت",slug:"gohardasht",citySlug:"karaj"},
    // {name:"جهانشهر",slug:"jahanshahr",citySlug:"karaj"},
  ]

  subspecialties:SubSpecialty[]=[];

//Filter Variables
  fName:string="";
  fCity:city["slug"]= "";
  fArea:area["slug"]= "";
  fSpecialty:Specialty["link"]='';
  fSubSpecialty:SubSpecialty["link"]="";

  constructor() {this.onSelectCity(this.cities[0].slug) }

  onSelectCity(city:string ){
    console.log(city)
    console.log("on service")

    switch(city){
      case "karaj":
        this.areas=[
          {name:"عظیمیه",slug:"azimieh",citySlug:"karaj"},
          {name:"گوهردشت",slug:"gohardasht",citySlug:"karaj"},
          {name:"جهانشهر",slug:"jahanshahr",citySlug:"karaj"},
        ];
        console.log(this.areas.length);
        break;
      case "tehran":
          this.areas=[];
          console.log(this.areas.length);
          console.log("valiasr");
        break;
      default:
        this.areas=[];
    }
  }

  s_onSelectSpecialty(specialty:Specialty["link"] ){
    this.Specialties.forEach(element => {
      if(element.link==specialty)
        this.specialty=element;
    })
    switch(specialty){
      case "taghzie":
        this.subspecialties=[
          {name:"چاقی",link:"chaghi",specialtyLink:"taghzie"},
          {name:"لاغری",link:"laghari",specialtyLink:"taghzie"}
        ];
      break;
      case "omomi":
        this.subspecialties=[
          {name:"کودکان",link:"kodakan",specialtyLink:"omomi"},
          {name:"بزرگسال",link:"bozorgsal",specialtyLink:"omomi"}
        ];
      break;
      default:
        this.subspecialties=[];
    }
    this.fSubSpecialty="";
  }
  s_onSelectSubSpecialty(SubSpecialty:SubSpecialty["link"]){
    this.fSubSpecialty=SubSpecialty;
  }

  Page(pageNumber:number){
    pageNumber++;
    var perpage=10;
    //var prepageNumber=pageNumber-1;
    this.doctors=this.tmpdoctors.slice(pageNumber*perpage-perpage,pageNumber*perpage)
    console.log(pageNumber*perpage-perpage,pageNumber*perpage);

  }
}
