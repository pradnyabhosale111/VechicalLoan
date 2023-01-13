import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './defaultMod/header/header.component';
import { NavbarComponent } from './defaultMod/navbar/navbar.component';
import { FooterComponent } from './defaultMod/footer/footer.component';
import { DefautcomponentComponent } from './defautcomponent/defautcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    DefautcomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
