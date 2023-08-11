import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigureDeviceComponent } from './configure-device/configure-device.component';
import { HomeComponent } from './home/home.component';
import { DataCollectorComponent } from './data-collector/data-collector.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'configure-device', component: ConfigureDeviceComponent },
  { path: 'data-collector', component: DataCollectorComponent },
  // Other routes can be added here
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
