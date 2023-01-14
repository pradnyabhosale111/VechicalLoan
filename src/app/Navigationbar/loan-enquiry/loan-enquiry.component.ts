import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-enquiry',
  templateUrl: './loan-enquiry.component.html',
  styleUrls: ['./loan-enquiry.component.scss']
})
export class LoanEnquiryComponent 
{
  dueDateValidator: FormControl =  new FormControl('', [Validators.required]);

  register()
  {
    
  }
}
