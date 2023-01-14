import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../Model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  
  

  constructor(private http:HttpClient) { }

  enquiryDetails:Enquiry={
    customerEnquiryId:'',
    customerFirstname:'',
    customerMiddlename:'',
    customerLastname:'',
    customerDateOfBirth:'',
    customerEmail:'',
    customerMobileNumber:0,
    customerPancardNumber:'',
    customerEnquiryStatus:'',
    }


    customerEnquiry(enqdata: Enquiry) {
    alert("call to common service ")
    return this.http.post("http://localhost:9090/GCappps/enquiry",enqdata)  // done here
  }

  // response are get in the form of the base responselist //it is for all data  
  // re get all enquiries from here 
  customerEnquiries(){
    return this.http.get("http://localhost:9090/GCappps/getallenquiries/enquiryStatus")
  }


// for re module 
// do some task for table seen table seen 
  cibilScoreCheck(enqdata: Enquiry){
    return this.http.put("http://localhost:9090/GCappps/cibilscore/"+enqdata.customerEnquiryId,enqdata)
  }

  // //old 
  // sendAttachedMail(data: FormData){
  //   return this.http.post("http://localhost:9095/email/sendmailwithattachment",data)
  // }
  //http://localhost:9095/email/sendmail
  //
}

