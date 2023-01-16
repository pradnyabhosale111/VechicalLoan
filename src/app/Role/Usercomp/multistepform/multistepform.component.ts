import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-multistepform',
  templateUrl: './multistepform.component.html',
  styleUrls: ['./multistepform.component.scss'],
})
export class MultistepformComponent {
//   constructor(private fb: FormBuilder) {}

//   isLinear = true;

//   ngOnInit(): void {}

//   Empregister = this.fb.group({
//     basic: this.fb.group({
//       customerFirstName: this.fb.control('', Validators.required),
//       customerMiddleName: this.fb.control('', Validators.required),
//       customerLastName: this.fb.control('', Validators.required),
//       customerDateOfBirth: this.fb.control('', Validators.required),
//       customerGender: this.fb.control('', Validators.required),

//       customerMobileNumber: this.fb.control('', Validators.required),
//       customerAdditionalMobileNumber: this.fb.control('', Validators.required),
//       customerPanCard: this.fb.control('', Validators.required),
//       customerAadharCard: this.fb.control('', Validators.required),
      
//       customerEmail: this.fb.control('', Validators.required),
//       customerQualification: this.fb.control('', Validators.required),
      
//       customerLoanStatus: this.fb.control('', Validators.required),
//     }),
//     addressdetails: this.fb.group({
//       state: this.fb.control('', Validators.required),
//       cityname: this.fb.control('', Validators.required),
//       district: this.fb.control('', Validators.required),
//       areaname: this.fb.control('', Validators.required),
//       pincode: this.fb.control('', Validators.required),
//       houseNumber: this.fb.control('', Validators.required),
//       streetname: this.fb.control('', Validators.required),
//       pstate: this.fb.control('', Validators.required),
//       pcityname: this.fb.control('', Validators.required),
//       pdistrict: this.fb.control('', Validators.required),
//       pareaname: this.fb.control('', Validators.required),
//       ppincode: this.fb.control('', Validators.required),
//       phouseNumber: this.fb.control('', Validators.required),
//       pstreetname: this.fb.control('', Validators.required),
//     }),
//     customerFinancialData: this.fb.group({
//       customerTotalLoanRequired: this.fb.control('', Validators.required),
//       customerBankAccountNumber: this.fb.control('', Validators.required),
//       customerBankName: this.fb.control('', Validators.required),
//       customerBankBranchName: this.fb.control('', Validators.required),
//       customerBankIfscNumber: this.fb.control('', Validators.required),
//       occupationType: this.fb.control('', Validators.required),
//       occupationDesignation: this.fb.control('', Validators.required),  
//       occupationMonthlyIncome: this.fb.control('', Validators.required),
//       customerMonthlyDeduction: this.fb.control('', Validators.required),
//       EmployeerName: this.fb.control('', Validators.required) 
     
//     }),

//     dealerDetails: this.fb.group({
//       dealerName: this.fb.control('', Validators.required),
//       dealerAddress: this.fb.control('', Validators.required),
//       dealerBankAccountNumber: this.fb.control('', Validators.required),
//       dealerBankName: this.fb.control('', Validators.required),
//       dealerBankBranchName: this.fb.control('', Validators.required),
//       dealerBankBrancIFSCNumber: this.fb.control('', Validators.required),
//     }),
//     vehicleDetails: this.fb.group({
//       customerVehicleModel: this.fb.control('', Validators.required),
//       customerVehicleChassis: this.fb.control('', Validators.required),
//       customerVehicleNumber: this.fb.control('', Validators.required),
//       customerVehicleRcNumber: this.fb.control('', Validators.required),
//     }),
//     allDocuments: this.fb.group({
//       panCard: this.fb.control('', Validators.required),
//       incomeProof: this.fb.control('', Validators.required),
//       aadharCard: this.fb.control('', Validators.required),
//       photo: this.fb.control('', Validators.required),
//       signature: this.fb.control('', Validators.required),
//       bankPassBook: this.fb.control('', Validators.required),
//     }),
//   });

//   get Basicform() {
//     return this.Empregister.get('basic') as FormGroup;
//   }
//   get addressdetailsform() {
//     return this.Empregister.get('addressdetails') as FormGroup;
//   }
//   get customerFinancialDataForm() {
//     return this.Empregister.get('customerFinancialData') as FormGroup;
//   }
//   get dealerDetailsform() {
//     return this.Empregister.get('dealerDetails') as FormGroup;
//   }
//   get vehicleDetailsform() {
//     return this.Empregister.get('vehicleDetails') as FormGroup;
//   }
//   get alldocumentsform() {
//     return this.Empregister.get('allDocuments') as FormGroup;
//   }
//   selectpancard: any;
//   incomeProof: any;
//   photo: any;
//   signature: any;
//   aadharCard: any;
//   bankPassBook: any;

//   onselectfile1(event) {
//     this.selectpancard = event.target.files[0];
//   }
//   onselectfile2(event) {
//     this.incomeProof = event.target.files[0];
//   }
//   onselectfile3(event) {
//     this.photo = event.target.files[0];
//   }
//   onselectfile4(event) {
//     this.aadharCard = event.target.files[0];
//   }
//   onselectfile5(event) {
//     this.signature = event.target.files[0];
//   }
//   onselectfile6(event) {
//     this.bankPassBook = event.target.files[0];
//   }
//   filename: 'Photo';
//   HandleSubmit() {
//     if (this.Empregister.valid) {
//       console.log(this.Empregister.value);
//     } else {
//       alert('error');
//     }
//   }
 }

