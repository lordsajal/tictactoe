import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router:Router, public authService:AuthService) { }

  ngOnInit(): void {
  }
  onPlay(){
this.router.navigate(['/game']);
  }
  logout(){
    firebase.auth().signOut();
  }

}
