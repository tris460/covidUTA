import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiDataPage } from './api-data.page';

const routes: Routes = [
  {
    path: '',
    component: ApiDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiDataPageRoutingModule {}
