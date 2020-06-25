import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cpuPower: any;
  constructor() {}
  ngOnInit() {
    this.cpuPower = 30;
  }
  onChangeSlider(val) {
    console.log(val);

    this.cpuPower = val;
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
