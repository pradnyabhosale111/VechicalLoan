import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OperationalExecutiveComponent } from './operational-executive.component';

export const oerouting: Routes = [
 // {    path:'viewenquiries',component: }
]

@NgModule({
  declarations: [
    OperationalExecutiveComponent
  ],
  imports: [
    RouterModule.forChild(oerouting),
    CommonModule
  ]
})
export class OperationalExecutiveModule { }
