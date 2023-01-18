import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer';

@Component({
  selector: 'app-singleappliaction',
  templateUrl: './singleappliaction.component.html',
  styleUrls: ['./singleappliaction.component.scss']
})
export class SingleappliactionComponent implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public route:Router){ }

public customerdetails:any

ngOnInit():void{

  // parma method used to get Data from URL
 //now Data will be came in String formate we need to convert it into Object with help of JSON.parse method

 // way 1:
  // this.activatedRouter.paramMap.subscribe((param)=>{
  //   this.customerdetails= JSON.parse(param.get('data'));
  // })



 // working ok way 2: 
   this.activatedRouter.queryParams.subscribe((params)=>{
    console.log(params)
        this.customerdetails=JSON.parse(params['data']);
    })

    
  
   }

}
