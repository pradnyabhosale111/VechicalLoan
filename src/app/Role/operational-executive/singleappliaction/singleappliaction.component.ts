import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-singleappliaction',
  templateUrl: './singleappliaction.component.html',
  styleUrls: ['./singleappliaction.component.scss']
})
export class SingleappliactionComponent implements OnInit {

  constructor(private fb: FormBuilder, public activatedRouter: ActivatedRoute, public route: Router, private cs:CommonServiceService) { }

  statusform: FormGroup;

  public customerdetails: any

  ngOnInit(): void {

    // parma method used to get Data from URL
    //now Data will be came in String formate we need to convert it into Object with help of JSON.parse method

    // way 1:
    // this.activatedRouter.paramMap.subscribe((param)=>{
    //   this.customerdetails= JSON.parse(param.get('data'));
    // })



    // working ok way 2: 
    this.activatedRouter.queryParams.subscribe((params) => {
      console.log(params)
      this.customerdetails = JSON.parse(params['data']);
    })
  }

  applicationVerify(customerId: string) {
this.cs.withstatusUpdate(customerId,"Verified").subscribe(()=>{
});

  }
  applicationReject(customerId: string) {
    this.cs.withstatusUpdate(customerId,"Rejected").subscribe(()=>{
    })

  }


}
