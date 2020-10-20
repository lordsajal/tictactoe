import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, public router:Router,public authService:AuthService) {}
  message : string="";
  userError:any;
  ngOnInit() {
    this.initRegForm();
  }

  initRegForm() {
    this.registrationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
  }

  fieldTextType: boolean;



toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;

}

onRegister(registrationForm){
  this.authService.login(registrationForm.value.email,registrationForm.value.password).then((data)=>{
     console.log(data);
     this.message="you have been logged in successfully";
     this.router.navigate(['/profile']);
   }).catch((error)=>{
  this.userError=error;
  console.log(error);
   })
 }
}
