import { Component } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-ledgerdata',
  templateUrl: './ledgerdata.component.html',
  styleUrls: ['./ledgerdata.component.scss']
})
export class LedgerdataComponent {

  customerdatalist:Customer

  constructor(private cs:CommonServiceService){

  }

  loanDisburseList(){
    this.cs.getCustomer("Loan_Disbursed").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
  }
  
  ledgerGenratedList(){
    this.cs.getCustomer("Ledger_Genrated").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
  }
// no enum upto now
  defaulterList(){
    this.cs.getCustomer("Defualter").subscribe((application:any)=>{
      this.customerdatalist=application.responceData
    });
  }


  loandisbursement(customerId:string){
    this.cs.ledgerGenration(customerId,"Ledger_Generated").subscribe((response:any)=>{
});
}

}
