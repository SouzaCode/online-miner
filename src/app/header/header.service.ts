import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  cpuUsage: number;
  constructor() {}
  setCpuUsage(usage): void {
    this.cpuUsage = usage;
  }
  getCpuUsage(): number {
    return this.cpuUsage;
  }
}
