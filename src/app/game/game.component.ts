import { TmplAstReference } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  user: boolean = true;
  click: boolean = false;
  fl: number = 0;
  min: number;
  max: number;
  exists = [];
  randomNUm: number = 2;
  uChs: string;
  bChs: string;
  winner: string;
  arr1 = [];
  arr2 = [];
  TP1 = [1, 2, 3];
  TP2 = [1, 4, 7];
  TP3 = [1, 5, 9];
  TP4 = [2, 5, 8];
  TP5 = [3, 6, 9];
  TP6 = [3, 5, 7];
  TP7 = [4, 5, 6];
  TP8 = [7, 8, 9];
  constructor() { }

  ngOnInit(): void {
    document.getElementById("gm").style.display = "none";
    document.getElementById("wnr").style.display = "none";

  }
  btnChO() {
    document.getElementById("ch").style.display = "none";
    document.getElementById("gm").style.display = "block";
    this.uChs = "O";
    this.bChs = "X";

  }
  btnChX() {
    document.getElementById("ch").style.display = "none";
    document.getElementById("gm").style.display = "block";
    this.uChs = "X"
    this.bChs = "O";

  }
  btnClick(btNo) {
    document.getElementById("btn-" + btNo).setAttribute("disabled", "disabled");
    if (this.user) {
      document.getElementById("btn-" + btNo).innerText = this.uChs;
      this.arr1.push(btNo);
    }
    else {
      document.getElementById("btn-" + btNo).innerText = this.bChs;

      this.arr2.push(btNo);
    };
    this.exists[btNo] = true;
    this.user = !this.user;
    this.fl++;
    this.check();
    if (!this.user) {
      this.getRandomNum();
    }
  }


  check() {
    if (this.fl == 9) {
      this.winner = "-_-";
      this.gFnsh();
    }
    if (this.matchingU1(this.TP1) || this.matchingU1(this.TP2) || this.matchingU1(this.TP3) || this.matchingU1(this.TP4) || this.matchingU1(this.TP5) || this.matchingU1(this.TP6) || this.matchingU1(this.TP7) || this.matchingU1(this.TP8)) {
      this.winner = "USER";
      this.gFnsh();
    }
    if (this.matchingB(this.TP1) || this.matchingB(this.TP2) || this.matchingB(this.TP3) || this.matchingB(this.TP4) || this.matchingB(this.TP5) || this.matchingB(this.TP6) || this.matchingB(this.TP7) || this.matchingB(this.TP8)) {
      this.winner = "BOT";
      this.gFnsh();
    }
  }
  gFnsh(){
    document.getElementById("wnr").style.display = "block";
      var x = document.getElementsByClassName("btn-play");
      var i: number;
      for (i = 0; i < x.length; i++) {
        (<HTMLInputElement>x[i]).setAttribute("disabled", "disabled");
      }
  }
  getRandomNum() {
    let max = 9;
    let min = 1;
    if (this.fl != 9) {
      do {
        this.randomNUm = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (this.exists[this.randomNUm]);
    }
    document.getElementById("btn-" + this.randomNUm).click();
  }
  matchingU1(arr) {
    let f = 0;
    for (let i = 0; i < 3; i++) {
      if (this.arr1.includes(arr[i])) {
        f++;
      }
    }
    if (f == 3) {
      return true;
    }
    else {
      return false;
    }
  }
  matchingB(arr) {
    let f = 0;
    for (let i = 0; i < 3; i++) {
      if (this.arr2.includes(arr[i])) {
        f++;
      }
    }
    if (f == 3) {
      return true;
    }
    else {
      return false;
    }
  }
}
