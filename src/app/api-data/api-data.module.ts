import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiDataPageRoutingModule } from './api-data-routing.module';

import { ApiDataPage } from './api-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiDataPageRoutingModule
  ],
  declarations: [ApiDataPage]
})
export class ApiDataPageModule {}
