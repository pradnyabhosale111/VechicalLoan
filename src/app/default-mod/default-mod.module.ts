import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultModRoutingModule } from './default-mod-routing.module';
import { HeaderComponent } from '../defaultMod/header/header.component';
import { NavbarComponent } from '../defaultMod/navbar/navbar.component';
import { FooterComponent } from '../defaultMod/footer/footer.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule
  
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class DefaultModModule { }
