import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    //localhost:4200/collections/
   path: '',
   component: IndexComponent,
   //localhost:4200/collections/
  //  children: [
  //    { path: '', component: BiographComponent },
  //    { path: 'companies', component: CompaniesComponent },
  //    { path: 'partners', component: PartnersComponent },
  //  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
