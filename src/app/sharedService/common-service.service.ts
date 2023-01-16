import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cibil } from '../Model/cibil';
import { EnquiryDetails } from '../Model/EnquiryDetails';


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


 public cibildata:Cibil={
cibilId:'',                                   
cibilScore:'',                                     
cibilGeneratedDateTime:'',                                 
remark:'',                                  
previousEmi:''                        
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
  //
}



