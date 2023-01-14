import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './defaultMod/header/header.component';
import { NavbarComponent } from './defaultMod/navbar/navbar.component';
import { FooterComponent } from './defaultMod/footer/footer.component';

import { DefaultModModule } from './default-mod/default-mod.module';
import { HomeComComponent } from './Navigationbar/home-com/home-com.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DefaultModRoutingModule } from './default-mod/default-mod-routing.module';

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModModule,
    DefaultModRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
