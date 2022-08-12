import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NobatV2';
  footerLinks=[
    {text:"متن ساختگی",link:"https://mdra.ir" ,row:1},
    {text:"لوریم ایپسون",link:"https://mdra.ir",row:1},
    {text:"درباره ما",link:"https://mdra.ir",row:2},
    {text:"متن ساختگی",link:"https://mdra.ir" ,row:2},
    {text:"لوریم ایپسون",link:"https://mdra.ir",row:2},
    {text:"درباره ما",link:"https://mdra.ir",row:2},
    {text:"متن ساختگی",link:"https://mdra.ir" ,row:2},
    {text:"لوریم ایپسون",link:"https://mdra.ir",row:3},
    {text:"درباره ما",link:"https://mdra.ir",row:3},
    {text:"متن ساختگی",link:"https://mdra.ir" ,row:3},
    {text:"لوریم ایپسون",link:"https://mdra.ir",row:3},
    {text:"درباره ما",link:"https://mdra.ir",row:3},
  ]
}
