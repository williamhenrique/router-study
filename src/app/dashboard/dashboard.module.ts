import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash/dash.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', component: DashComponent }
];


@NgModule({
  declarations: [DashComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class DashboardModule { }
