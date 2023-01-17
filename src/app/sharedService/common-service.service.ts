import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibil } from '../Model/cibil';
import { Customer } from '../Model/customer';
import { CustomerAddress } from '../Model/customer-address';
import { CustomerFinancialData } from '../Model/customer-financial-data';
import { Dealer } from '../Model/dealer';
import { Documents } from '../Model/documents';
import { EnquiryDetails } from '../Model/EnquiryDetails';
import { GuarantorDetails } from '../Model/guarantor-details';
import { Ledger } from '../Model/ledger';
import { LoanDisbursement } from '../Model/loan-disbursement';
import { SanctionLetter } from '../Model/sanction-letter';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  

  constructor(private http:HttpClient) { }

 public enquiryDetails:EnquiryDetails={
   enquiryId: '',
   customerFirstName: '',
   customerMiddleName: '',
   customerLastName: '',
   customerDateOfBirth: '',
   customerEmail: '',
   customerMobileNumber: 0,
   pancardNumber: '',
   enquiryStatus: '',
   cibildata: new Cibil
 }



public customer:Customer={
  customerId: undefined,
  enquiryId: '',
  customerFirstName: '',
  customerMiddleName: '',
  customerLastName: '',
  customerDateOfBirth: '',
  customerGender: '',
  customerMobileNumber: 0,
  customerAdditionalMobileNumber: 0,
  customerEmail: '',
  customerVerificationStatus: '',
  customerAddress: new CustomerAddress,
  customerFinancialData: new CustomerFinancialData,
  dealerData: new Dealer,
  guarantorDetails: new GuarantorDetails,
  customerDocuments: new Documents,
  // this is passed null from frontend
  loanDisbursement: new LoanDisbursement,
  ledger: new Ledger,
  sanctionLetter: new SanctionLetter,
  // already in data base 
  customerCibilScore: new Cibil
}


 


  customerEnquiry(enquiryDetails: EnquiryDetails) {
    alert("call to common service ")
    return this.http.post("http://localhost:9090/GCappps/enquiry",enquiryDetails)  // done here
  }

  // response are get in the form of the base responselist //it is for all data  
  // re get all enquiries from here 
  customerEnquiries(status:string){
    return this.http.get("http://localhost:9090/GCappps/getallenquiries/"+status)
  }


// for re module 
// do some task for table seen table seen 

// wrong method input 
  cibilScoreCheck(enquiryDetails: EnquiryDetails){
    return this.http.put("http://localhost:9090/GCappps/cibilscore/"+enquiryDetails.enquiryId,enquiryDetails)
  }

  // //old 
  // sendAttachedMail(data: FormData){
  //   return this.http.post("http://localhost:9095/email/sendmailwithattachment",data)
  // }
  //http://localhost:9095/email/sendmail

  saveCustomer(customer:any){
    alert("call to common service ")
    return this.http.post("http://localhost:9090/GCappps/upload",customer)
  }


}



