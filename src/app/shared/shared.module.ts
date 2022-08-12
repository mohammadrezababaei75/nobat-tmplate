import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRateComponent } from './star-rate/star-rate.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TitleComponent } from './title/title.component';
import { RepeatDirective } from './repeat.directive';



@NgModule({
  declarations: [
    StarRateComponent,
    PaginationComponent,
    TitleComponent,
    RepeatDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarRateComponent,
    PaginationComponent,
    TitleComponent
  ]
})
export class SharedModule { }
