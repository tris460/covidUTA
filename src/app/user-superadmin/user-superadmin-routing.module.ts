import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSuperadminPage } from './user-superadmin.page';

const routes: Routes = [
  {
    path: '',
    component: UserSuperadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSuperadminPageRoutingModule {}
