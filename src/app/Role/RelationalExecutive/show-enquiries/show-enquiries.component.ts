import { Component } from '@angular/core';
import { EnquiryDetails } from 'src/app/Model/EnquiryDetails';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-show-enquiries',
  templateUrl: './show-enquiries.component.html',
  styleUrls: ['./show-enquiries.component.scss']
})
export class ShowEnquiriesComponent {

constructor(private cs:CommonServiceService){}

public enquirylist:any[]

 pendingEnquiries(){
  
  this.cs.customerEnquiries("Enquired").subscribe((response:any)=>{
    this.enquirylist=response.responceData;
  })
 }

 validcibilEnquiries(){
  this.cs.customerEnquiries("Cibilok").subscribe((response:any)=>{
    this.enquirylist=response.responceData;
  })
 }

 rejectcibilEnquiries(){
  this.cs.customerEnquiries("CibilReject").subscribe((response:any)=>{
    this.enquirylist=response.responceData;
  })
 }

  




}
