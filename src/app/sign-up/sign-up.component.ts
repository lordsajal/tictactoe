import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initRegForm();
  }

  initRegForm() {
    this.registrationForm = this.fb.group({
      fName: ['',[Validators.required]],
      lName: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]
    },{
      validator: this.checkIfMatchingPasswords("password","confirmPassword")
     });
  }

  fieldTextTypeP: boolean;
  fieldTextTypeCP: boolean;
  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup) => {
     let password = group.controls[passwordKey];
     let confirmPassword = group.controls[confirmPasswordKey];
     if(password.value==confirmPassword.value){
       return;
     }
     else{
       confirmPassword.setErrors({
         notEqualToPassword: true
       })
     }
    }
  }


toggleFieldTextTypeP() {
  this.fieldTextTypeP = !this.fieldTextTypeP;
}
toggleFieldTextTypeCP() {
  this.fieldTextTypeCP = !this.fieldTextTypeCP;
}
}
