import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewDeviceComponent } from './components/new-device/new-device.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full',redirectTo: 'home'},
  {path: '', component: HomeComponent},
  {path: 'devices', component: DevicesComponent},
  {path: 'new-device', component: NewDeviceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
