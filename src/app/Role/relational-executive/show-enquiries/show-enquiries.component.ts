import { Component } from '@angular/core';
import { EnquiryDetails } from 'src/app/Model/EnquiryDetails';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-enquiries',
  templateUrl: './show-enquiries.component.html',
  styleUrls: ['./show-enquiries.component.scss']
})
export class ShowEnquiriesComponent {

constructor(private cs:CommonServiceService){}

public enquirylist:any[]
showme=false;


 pendingEnquiries(){  
  this.cs.customerEnquiries("Enquired").subscribe((response:any)=>{
    this.enquirylist=response.responceData;
  })
  this.showme=false;
 }

 validcibilEnquiries(){  
  this.cs.customerEnquiries("Cibilok").subscribe((response:any)=>{
    this.enquirylist=response.responceData;
    this.showme=true;
  })
 }

 rejectcibilEnquiries(){
  this.cs.customerEnquiries("Cibilreject").subscribe((response:any)=>{
    this.enquirylist=response.responceData;
    this.showme=true;
  })
 }

  
 cibilScoreCheck(enquiryDetails: EnquiryDetails){
this.cs.cibilScoreCheck(enquiryDetails).subscribe(()=>{

window.location.reload();
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Cibil Score has Been Successfully Checked',
  showConfirmButton: true,
  timer: 1500
})

});
 }

 sendMail(enquiryDetails: EnquiryDetails){
  this.cs.sendMail(enquiryDetails).subscribe(()=>{
    // mail sent msg 
  }

  );
  window.location.reload();

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Mail has been sent to Customer',
    showConfirmButton: true,
    timer: 1500
  })
  
 }



}
