import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { BugReportComponent } from '../components/bugreport/bugreport.component';
import { AboutComponent } from '../components/about/about.component';
import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'settings',     component: SettingsComponent },
  { path: 'bugreport',    component: BugReportComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'logout',       component: LogoutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
