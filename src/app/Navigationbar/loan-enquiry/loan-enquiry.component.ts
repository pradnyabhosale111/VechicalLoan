import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-loan-enquiry',
  templateUrl: './loan-enquiry.component.html',
  styleUrls: ['./loan-enquiry.component.scss']
})
export class LoanEnquiryComponent 
{

  constructor(private fb:FormBuilder,private cs:CommonServiceService){}

  enquiryForm:FormGroup
  
  ngOnInit(){
    this.enquiryForm=this.fb.group({
      customerFirstname:[],
      customerMiddlename:[],
      customerLastname:[],
      customerDateOfBirth:[],
      customerEmail:[],
      customerMobileNumber:[],
      customerPancardNumber:[],
      customerEnquiryId:[],
      customerEnquiryStatus:[] 
    })
    }


  customerEnquiry(){
      this.cs.enquiryDetails=this.enquiryForm.value
this.cs.customerEnquiry(this.cs.enquiryDetails).subscribe();    
      
    }

}
