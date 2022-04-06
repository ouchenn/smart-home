import { Component, Input, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { Device } from "src/app/models/device";
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {

  @Input() deviceDetails = {
    device: '',
    room: '',
    floor: '',
    status: true
  }

  constructor(public devicesService: DevicesService, public router: Router) { }

  ngOnInit(): void {
  }

  // POST
  addDevice(device: any) {
    this.devicesService.create(this.deviceDetails).subscribe((data: {}) => {
      this.router.navigate(['/devices']);
    });
  }
}
