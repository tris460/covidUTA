import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorySuperadminPageRoutingModule } from './history-superadmin-routing.module';

import { HistorySuperadminPage } from './history-superadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorySuperadminPageRoutingModule
  ],
  declarations: [HistorySuperadminPage]
})
export class HistorySuperadminPageModule {}
