import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { Observable } from 'rxjs';
import { Device } from "src/app/models/device";

@Component({
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devicesList: any = [];
  //deviceStatus: boolean = false;

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
    this.listDevices();
  }

  // GET
  listDevices() {
    this.devicesService.list().subscribe((response) => {
      this.devicesList = response;
    }, (error => {
    }));
  }

  // PATCH
  updateDevice(device: any) {
  }

  // DELETE
  deleteDevice(id: number) {
    this.devicesService.delete(id).subscribe((response) => {
      this.listDevices();
    }, (error => {
    }));
  }

  // TOGGLE SWITCH
  deviceStatusSwitch(device: any) {
    
    device.status = !device.status;

    this.devicesService.update(device.id, device).subscribe((response) => {
      this.listDevices();
    }, (error => {
    }));
  }
}
