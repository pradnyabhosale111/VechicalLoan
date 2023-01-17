import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//custome module
import { DefaultModModule } from './default-mod/default-mod.module';
import { DefaultModRoutingModule } from './default-mod/default-mod-routing.module';
import { FAQComponent } from './Navigationbar/faq/faq.component';
import { InterestRateComponent } from './Navigationbar/interest-rate/interest-rate.component';
import { DashboardModule } from './Dashboard/dashboard/dashboard.module';
import { OperationalExecutiveModule } from './Role/operational-executive/operational-executive.module';
import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';
import { UserModule } from './Role/user/user.module';
import { ApplicationlistComponent } from './Role/Oecomp/applicationlist/applicationlist.component';
import { SingleappliactionComponent } from './Role/Oecomp/singleappliaction/singleappliaction.component';

@NgModule({
  declarations: [AppComponent, ApplicationlistComponent, SingleappliactionComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModModule,
    DefaultModRoutingModule,
    DashboardModule,
    RelationalExecutiveModule,
    OperationalExecutiveModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
