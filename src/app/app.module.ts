import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { GameComponent } from './game/game.component';


var firebaseConfig = {
  apiKey: "AIzaSyBvkbADcrVvkqpX5QcJMFaeEvxHl4d1jm4",
  authDomain: "tictactoe-d1785.firebaseapp.com",
  databaseURL: "https://tictactoe-d1785.firebaseio.com",
  projectId: "tictactoe-d1785",
  storageBucket: "tictactoe-d1785.appspot.com",
  messagingSenderId: "700903416045",
  appId: "1:700903416045:web:4e67c86b554f1f3db72ce4",
  measurementId: "G-5WN9PBEFZ1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
