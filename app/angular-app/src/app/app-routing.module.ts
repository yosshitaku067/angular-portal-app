import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './pages/contents-page/contents-page.component';
import { TopPageComponent } from './pages/top-page/top-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  },
  {
    path: 'top',
    component: TopPageComponent,
  },
  {
    path: 'contents/:id',
    component: ContentsComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
