import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneroComponent } from './monero/monero.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'monero', component: MoneroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
