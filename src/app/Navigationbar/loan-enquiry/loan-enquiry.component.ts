import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/Model/enquiry';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-loan-enquiry',
  templateUrl: './loan-enquiry.component.html',
  styleUrls: ['./loan-enquiry.component.scss']
})
export class LoanEnquiryComponent 
{
  // dueDateValidator: FormControl =  new FormControl('', [Validators.required]);

  // register()
  // {
    
  // }

  
  constructor(private fb:FormBuilder,private router:Router,private cs:CommonServiceService){}

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
 
    })
    }


    enquiryDetails(){
      this.cs.enquiryDetails=this.enquiryForm.value
this.cs.customerEnquiry(this.cs.enquiryDetails).subscribe();    
      
    }

}
