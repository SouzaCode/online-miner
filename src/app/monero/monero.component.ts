import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-monero',
  templateUrl: './monero.component.html',
  styleUrls: ['./monero.component.scss'],
})
export class MoneroComponent implements OnInit {
  cpuUsage: number;
  isMining: boolean = false;
  wallet: string;
  mouseOver1: boolean;
  mouseOver: boolean;
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.wallet = '';
    this.cpuUsage = this.headerService.getCpuUsage();
  }
  startMining() {
    this.isMining = true;
  }
  stopMining() {
    this.isMining = false;
  }

  getCpuUsage(): number {
    this.cpuUsage = this.headerService.getCpuUsage();
    return this.cpuUsage;
  }
}
