import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDetialsComponent } from './view-detials/view-detials.component';


const routes: Routes = [
  {
    path: '',
    component: ViewDetialsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetialsRoutingModule {}
