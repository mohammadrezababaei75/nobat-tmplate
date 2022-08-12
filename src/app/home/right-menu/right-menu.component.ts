import { Target } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { area, city, Specialty } from 'src/app/Model';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent implements OnInit {
  
  @Output() onSelectCity=new EventEmitter;
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
  citySearchWord:string='';
  areaSearchWord:string='';
  
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

  city:city=this.cities[0];
  area:area=this.areas[0];
  
  constructor() { }

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
}
