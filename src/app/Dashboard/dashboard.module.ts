import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from '../Dashboard/dashboard.component';
import {SettingsComponent} from '../Dashboard/settings/setting.component';
import {AdminComponent} from './admin/admin.component';
import {RouterModule} from "@angular/router";
import {dashboardRoutes} from "./dashboard.routes";
import { AuthGuard } from '../Service/authGaurd';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardComponent, SettingsComponent, AdminComponent],
  exports: [DashboardComponent],
  providers:[AuthGuard]
})
export class DashboardModule {
}
