import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardcompComponent } from './Dashboard/dashboardcomp/dashboardcomp.component';
import { OperationalExecutiveModule } from './Role/operational-executive/operational-executive.module';
import { RelationalExecutiveModule } from './Role/relational-executive/relational-executive.module';

import { UserModule } from './Role/user/user.module';

const routes: Routes = [

  { path: 'dashboardlayout',component:DashboardcompComponent,
  children: [
    {
      path: 'RExecutive', loadChildren: () => RelationalExecutiveModule
    },
    {
      path: 'OExecutive', loadChildren: () => OperationalExecutiveModule
    },            
    {
      path: 'User', loadChildren: () => UserModule
    }    
  ]
}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
