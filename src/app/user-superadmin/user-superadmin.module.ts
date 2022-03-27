import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSuperadminPageRoutingModule } from './user-superadmin-routing.module';

import { UserSuperadminPage } from './user-superadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSuperadminPageRoutingModule
  ],
  declarations: [UserSuperadminPage]
})
export class UserSuperadminPageModule {}
