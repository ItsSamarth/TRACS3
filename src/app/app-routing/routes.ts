import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { SettingsContainerComponent } from '../components/settings-container/settings-container.component';
import { BugReportComponent } from '../components/bugreport/bugreport.component';
import { AboutComponent } from '../components/about/about.component';
import { LoginComponent } from '../components/login/login.component';
import { LogoutComponent } from '../components/logout/logout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',         component: HomeComponent },
  { path: 'settings',     component: SettingsContainerComponent, data: { title: "Settings"} },
  { path: 'bugreport',    component: BugReportComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'logout',       component: LogoutComponent },
];
