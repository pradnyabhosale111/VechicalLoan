import { Cibil } from "./cibil";

export class EnquiryDetails {
    enquiryId: string;
    customerFirstName:string;
    customerMiddleName:string;
    customerLastName:string;
    customerDateOfBirth:string;
    customerEmail:string;
    customerMobileNumber:number;
    pancardNumber:string;
    enquiryStatus:string;
    cibildata:Cibil;                               
    
    }
