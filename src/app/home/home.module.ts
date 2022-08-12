import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { SharedModule } from '../shared/shared.module';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [
    IndexComponent,
    DoctorListComponent,
    RightMenuComponent,
    DoctorComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
