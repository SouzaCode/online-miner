import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-monero',
  templateUrl: './monero.component.html',
  styleUrls: ['./monero.component.scss'],
})
export class MoneroComponent implements OnInit {
  cpuUsage: number;
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.cpuUsage = this.headerService.getCpuUsage();
  }

  getCpuUsage(): number {
    this.cpuUsage = this.headerService.getCpuUsage();
    return this.cpuUsage;
  }
}
