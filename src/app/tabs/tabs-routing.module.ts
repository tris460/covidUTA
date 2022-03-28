import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      },
      {
        path: 'user-superadmin',
        loadChildren: () => import('../user-superadmin/user-superadmin.module').then( m => m.UserSuperadminPageModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'history-superadmin',
        loadChildren: () => import('../history-superadmin/history-superadmin.module').then( m => m.HistorySuperadminPageModule)
      },
      {
        path: 'api-data',
        loadChildren: () => import('../api-data/api-data.module').then( m => m.ApiDataPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/settings',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/settings',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
