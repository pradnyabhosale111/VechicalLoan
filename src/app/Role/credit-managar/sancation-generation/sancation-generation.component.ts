import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/Model/customer';
import { SanctionLetter } from 'src/app/Model/sanction-letter';
import { CommonServiceService } from 'src/app/sharedService/common-service.service';
@Component({
  selector: 'app-sancation-generation',
  templateUrl: './sancation-generation.component.html',
  styleUrls: ['./sancation-generation.component.scss']
})
export class SancationGenerationComponent {
  
  constructor(public cs: CommonServiceService, public fb: FormBuilder, private activatedroute: ActivatedRoute) { }

 public sanctionLetterForm: FormGroup;
  customerInfo: FormGroup;
   public customerdata:Customer;
  s: SanctionLetter;
  c: any[]


  ngOnInit() {
// routed by the verfied list
    this.activatedroute.queryParams.subscribe((param) => {
      this.customerdata = JSON.parse(param['data']);
    })

    this.sanctionLetterForm = this.fb.group({
      sanctionId:'',
      sanctionDate: [],     
      applicantName: [this.customerdata.customerFirstName+" "+this.customerdata.customerMiddleName+" "+this.customerdata.customerLastName, [Validators.required]],
      loanAmountSanctioned: [0, [Validators.required]],
      interestType: ['', [Validators.required]],
      rateOfInterest: ['', [Validators.required]],
      loanTenure: ['', [Validators.required]],
      monthlyEmiAmount: ['', [Validators.required]],
      loanAmountWithInterest: ['', [Validators.required]],
      modeOfPayment: ['', [Validators.required]],
      //null
      sanctionLetterStatus: []


    });
  }

  get loanAmountSanctioned() {
    return this.sanctionLetterForm.get('loanAmountSanctioned');
  }
  get interestType() {
    return this.sanctionLetterForm.get('interestType');
  }
  get rateOfInterest() {
    return this.sanctionLetterForm.get('rateOfInterest');
  }
  get loanTenure() {
    return this.sanctionLetterForm.get('loanTenure');
  }
  get monthlyEmiAmount() {
    return this.sanctionLetterForm.get('monthlyEmiAmount');
  }
  get loanAmountWithInterest() {
    return this.sanctionLetterForm.get('loanAmountWithInterest');
  }
  get modeOfPayment() {
    return this.sanctionLetterForm.get('modeOfPayment');
  }


  // save sanction updated customer( old api for sanction upadate)
  // saveSanctionLetter(){
  //   alert("customer sanction secondary pojo updated ")
  //   this.customerdata.sanctionLetter=this.sanctionLetterForm.value
  //   this.cs.saveSanctionLetter(this.customerdata).subscribe();
  // }

  // for  only the sanction letter update (new api for sanction update)
saveSanctionLetter(){
  this.cs.sanctionobj=this.sanctionLetterForm.value
  this.cs.secondSaveSanctionLetter(this.customerdata.customerId,this.cs.sanctionobj).subscribe(()=>{

  });
}

}
