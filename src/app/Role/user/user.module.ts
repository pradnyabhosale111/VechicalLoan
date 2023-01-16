import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MultistepformComponent } from '../Usercomp/multistepform/multistepform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

export const Userrouting: Routes = [
  { path: 'applicationform', component: MultistepformComponent },
];

@NgModule({
  declarations: [MultistepformComponent],
  imports: [
    RouterModule.forChild(Userrouting),
    CommonModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatListModule,
    MatCheckboxModule,
  ],
  exports: [MultistepformComponent],
})
export class UserModule {}
