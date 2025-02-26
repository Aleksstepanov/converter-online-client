import { Routes } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';
import { HomeComponent } from '@pages/home/home.component';
import { RegisterComponent } from '@pages/register/register.component';
import { LayoutDefaultComponent } from '@core/layouts/layout-default/layout-default.component';
import { LayoutPublicComponent } from '@core/layouts/layout-public/layout-public.component';
import { AuthGuards } from '@core/guards/auth.guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
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
    path: 'register',
    component: LayoutPublicComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'home',
    component: LayoutDefaultComponent,
    canActivate: [AuthGuards],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
