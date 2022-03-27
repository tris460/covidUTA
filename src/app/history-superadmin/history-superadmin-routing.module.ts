import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorySuperadminPage } from './history-superadmin.page';

const routes: Routes = [
  {
    path: '',
    component: HistorySuperadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorySuperadminPageRoutingModule {}
