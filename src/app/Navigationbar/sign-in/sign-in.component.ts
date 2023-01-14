import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  @ViewChild('container')
  container: ElementRef;

  signIn() {
    this.container.nativeElement.classList.remove('right-panel-active');
    console.log(this.loginf)
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  constructor(private fb:FormBuilder)
  {}

  //login data is here
  loginf:FormGroup;
  //registration data is here
  registerf:FormGroup;

  ngOnInit()
  {
    this.loginf = this.fb.group({
      customerEmail:[],
      customerPassword:[]
    })

    this.registerf = this.fb.group({
      customerEmail:[],
      customerPassword:[],
      customerName:[]
    })
}
}
