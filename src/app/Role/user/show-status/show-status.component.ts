import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/Model/customer';
import { SanctionLetter } from 'src/app/Model/sanction-letter';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-show-status',
  templateUrl: './show-status.component.html',
  styleUrls: ['./show-status.component.scss']
})
export class ShowStatusComponent 
{
  title = 'SanctionLetter';

  constructor(public cs:CommonServiceService, public fb:FormBuilder){}

  customerdetails:Customer;
  sanctionLetterForm: FormGroup;
  customerInfo: FormGroup;
  showme=true;
s:SanctionLetter;
c:any[]





    ngOnInit(){

this.customerInfo=this.fb.group({  
  customerId:['', [Validators.required]],
})


     this.sanctionLetterForm= this.fb.group({
      sanctionId:[],
      sanctionDate:['', [Validators.required]],
      applicantName:['', [Validators.required]],
      loanAmountSanctioned:['', [Validators.required]],
      interestType:['', [Validators.required]],
      rateOfInterest:['', [Validators.required]],
      loanTenure:['', [Validators.required]],
      monthlyEmiAmount:['', [Validators.required]],
      loanAmountWithInterest:['', [Validators.required]],      
      //null
      sanctionLetterStatus:[]


      });
    }

    //customer get thier status on basics of id 
    getSingleCustomer()
   {
      alert("getSingleCustomer")
      this.cs.getSingleCustomer(this.customerInfo.get('customerId').value).subscribe((response:any)=>{
        this.customerdetails=response.responceData
      });
      this.showme=true; 
      if(this.customerdetails.customerVerificationStatus = null)  {
        
        window.location.reload();
        
       } 
      
    
   }

   

    get sanctionDate(){
      return this.sanctionLetterForm.get('sanctionDate');
    }
    get applicantName(){
      return this.sanctionLetterForm.get('applicantName');
    }
    get loanAmountSanctioned(){
      return this.sanctionLetterForm.get('loanAmountSanctioned');
    }
    get interestType(){
      return this.sanctionLetterForm.get('interestType');
    }
    get rateOfInterest(){
      return this.sanctionLetterForm.get('rateOfInterest');
    }
    get loanTenure(){
      return this.sanctionLetterForm.get('loanTenure');
    }
    get monthlyEmiAmount(){
      return this.sanctionLetterForm.get('monthlyEmiAmount');
    }
    get loanAmountWithInterest(){
      return this.sanctionLetterForm.get('loanAmountWithInterest');
    }
    get modeOfPayment(){
      return this.sanctionLetterForm.get('modeOfPayment');
    }

}
