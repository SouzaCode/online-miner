import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cpuPower: any;
  constructor(private headerService: HeaderService) {}
  ngOnInit() {
    this.cpuPower = 30;
    this.headerService.setCpuUsage(this.cpuPower);
  }
  onChangeSlider(val) {
    this.cpuPower = val;
    this.headerService.setCpuUsage(this.cpuPower);
  }
}
