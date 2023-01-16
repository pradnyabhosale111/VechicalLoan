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

 public enquiryForm:FormGroup
  
  ngOnInit(){
    this.enquiryForm=this.fb.group({
      enquiryId:[],
      customerFirstName:['',[Validators.required]],
      customerMiddleName:['',[Validators.required]],
      customerLastName:['',[Validators.required]],
      customerDateOfBirth:['',[Validators.required]],
      customerMobileNumber:['',[Validators.required]],
      pancardNumber:['',[Validators.required]],
      customerEmail:['',[Validators.required, Validators.email]],
      //below data is null
      enquiryStatus:[] ,
      cibilData:[]
       })
    }



  customerEnquiry(){
      this.cs.enquiryDetails=this.enquiryForm.value
this.cs.customerEnquiry(this.cs.enquiryDetails).subscribe();    
      
    }

    get customerFirstName(){
      return this.enquiryForm.get('customerFirstName');
    }

}
