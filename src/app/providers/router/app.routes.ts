import { Routes } from '@angular/router';
import { LoginComponent } from '../../core/pages/login/login.component';
import { HomeComponent } from '../../core/pages/home/home.component';
import { LayoutDefaultComponent } from '../../core/layouts/layout-default/layout-default.component';
import { LayoutPublicComponent } from '../../core/layouts/layout-public/layout-public.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LayoutPublicComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'home',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
