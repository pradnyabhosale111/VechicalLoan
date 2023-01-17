import { Component } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';

@Component({
  selector: 'app-applicationlist',
  templateUrl: './applicationlist.component.html',
  styleUrls: ['./applicationlist.component.scss']
})
export class ApplicationlistComponent {

constructor(private cs:CommonServiceService){}
  

  }

