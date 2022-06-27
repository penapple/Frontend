import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './home/home.component';
import { LoginFailedComponent } from './login-failed/login-failed.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'login-failed',
    component: LoginFailedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
