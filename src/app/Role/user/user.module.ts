import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MultistepformComponent } from './multistepform/multistepform.component';
import { ShowStatusComponent } from './show-status/show-status.component';



export const Userrouting: Routes = [
  { path: 'applicationform', component: MultistepformComponent },
  { path: 'statusshowform', component: ShowStatusComponent }
];

@NgModule({
  declarations: [MultistepformComponent,ShowStatusComponent],
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
    MatCardModule
    
    
  ],
  exports: [MultistepformComponent],
})
export class UserModule {}
