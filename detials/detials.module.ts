import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetialsRoutingModule } from './detials-routing.module';
import { ViewDetialsComponent } from './view-detials/view-detials.component';


@NgModule({
  declarations: [

    ViewDetialsComponent
  ],
  imports: [
    CommonModule,
    DetialsRoutingModule,
    SharedModule
  ]
})
export class DetialsModule { }
