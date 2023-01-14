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
import { DefautcomponentComponent } from '../defautcomponent/defautcomponent.component';
import { AppRoutingModule } from '../app-routing.module';
import { EmiCalculatorComponent } from '../Navigationbar/emi-calculator/emi-calculator.component';
import { AboutUsComponent } from '../Navigationbar/about-us/about-us.component';
import { LoanEnquiryComponent } from '../Navigationbar/loan-enquiry/loan-enquiry.component';
import { SignInComponent } from '../Navigationbar/sign-in/sign-in.component';
import { HomeComComponent } from '../Navigationbar/home-com/home-com.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    DefautcomponentComponent,
    HomeComComponent,
    EmiCalculatorComponent,
    LoanEnquiryComponent,
    AboutUsComponent,
    SignInComponent
  ],
  imports: [
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    DefaultModRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  
  
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    DefautcomponentComponent,
    HomeComComponent,
    EmiCalculatorComponent,
    LoanEnquiryComponent,
    AboutUsComponent,
    SignInComponent
  ]
})
export class DefaultModModule { }
