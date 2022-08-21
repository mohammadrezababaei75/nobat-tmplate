import { Injectable } from '@angular/core';
import { area, city, DoctorModel, Specialty } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
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

  Specialties : Specialty[]=[
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
    {name:"تغذیه",link:"https://site.com/spe/taghzie"},
    {name:"عمومی",link:"https://site.com/spe/omomi"},
    {name:"عفونی",link:"https://site.com/spe/ofoni"},
    {name:"قلب و عروق",link:"https://site.com/spe/ghalb"},
    {name:"فیزیوتراپی",link:"https://site.com/spe/fiziotrapy"},
    {name:"داخلی",link:"https://site.com/spe/dakheli"},
  ];
  
  cities : city[]=[
    {name:"کرج",slug:"karaj"},
    {name:"تهران",slug:"tehran"},
    {name:"اصفهان",slug:"esfahan"},
    {name:"مشهد",slug:"mashhad"},
    {name:"فم",slug:"ghom"},
    {name:"قزوین",slug:"ghazvin"},
    {name:"کرمان",slug:"kerman"},
  ]
  
  areas : area[]=[
    {name:"عظیمیه",slug:"azimieh",citySlug:"karaj"},
    {name:"گوهردشت",slug:"gohardasht",citySlug:"karaj"},
    {name:"جهانشهر",slug:"jahanshahr",citySlug:"karaj"},
    // {name:"عظیمیه",slug:"azimieh",citySlug:"karaj"},
    // {name:"گوهردشت",slug:"gohardasht",citySlug:"karaj"},
    // {name:"جهانشهر",slug:"jahanshahr",citySlug:"karaj"},
  ]

  constructor() { }
}
