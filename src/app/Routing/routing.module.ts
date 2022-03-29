import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingComponent } from './routing.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingExampleRoutingModule { }

export const AppRoutingComponents = [DashboardComponent, SettingsComponent, AboutComponent, RoutingComponent];