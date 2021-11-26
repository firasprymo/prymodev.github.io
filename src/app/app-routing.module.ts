import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
