import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,public router:Router, public authService:AuthService) { }
message : string="";
userError:any;
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
onRegister(registrationForm){
console.log(registrationForm.value);
let email: string = registrationForm.value.email;
let password: string = registrationForm.value.password;
let firstName: string = registrationForm.value.fName;
let lastName: string = registrationForm.value.lName;


this.authService.signup(email, password, firstName, lastName).then((user: any) => {

  firebase.firestore().collection("users").doc(user.uid).set({
    firstName: registrationForm.value.fName,
    lastName: registrationForm.value.lName,
    email: registrationForm.value.email,
    photoURL: user.photoURL,

  }).then(() => {
    this.message = "You have been signed up successfully.";
    this.userError = null;
    this.router.navigate(['/signIn']);
  })


}).catch((error) => {
  console.log(error);
  this.userError = error;
})




}
}
