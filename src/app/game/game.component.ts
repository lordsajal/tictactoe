import { TmplAstReference } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

user: boolean = true;
  click: boolean = false;
  arr1=[];
  arr2=[];
  TP1=[1,2,3];
  TP2=[1,4,7];
  TP3=[1,5,9];
  TP4=[2,5,8];
  TP5=[3,6,9];
  TP6=[3,5,7];
  TP7=[4,5,6];
  TP8=[7,8,9];
  constructor() { }

  ngOnInit(): void {
  }
  btnClick1(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
    (event.target as HTMLButtonElement).textContent = "O";
    this.arr1.push(1);
      this.arr1.sort();
      
    }
    else{
      (event.target as HTMLButtonElement).textContent = "X";
      this.arr2.push(1);
      this.arr2.sort();
    };

    this.user=!this.user;
    this.check();
  };
  btnClick2(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(2);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(2);
        this.arr2.sort();
      };
    
      this.user=!this.user;
      this.check();
  };
  btnClick3(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(3);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(3);
        this.arr2.sort();
      };
      this.user=!this.user;
      this.check();
  };
  
  btnClick4(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(4);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(4);
        this.arr2.sort();
      };
      this.user=!this.user;
      this.check();
  };
  btnClick5(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(5);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(5);
        this.arr2.sort();
      };
      this.user=!this.user;
      this.check();
  };
  btnClick6(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(6);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(6);
        this.arr2.sort();
      };
      this.user=!this.user;
      this.check();
  };
  btnClick7(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(7);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(7);
        this.arr2.sort();
      };
      this.user=!this.user;
      this.check();
  };
  btnClick8(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(8);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(8);
        this.arr2.sort();
      };
      this.user=!this.user;
      this.check();
  };
  btnClick9(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      this.arr1.push(9);
      this.arr1.sort();
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
        this.arr2.push(9);
        this.arr2.sort();
      };
      this.user=!this.user;
       this.check();
  };

 check(){
if(JSON.stringify(this.TP1) === JSON.stringify(this.arr1) || JSON.stringify(this.TP2) === JSON.stringify(this.arr1) || JSON.stringify(this.TP3) === JSON.stringify(this.arr1) || JSON.stringify(this.TP4) === JSON.stringify(this.arr1) || JSON.stringify(this.TP5) === JSON.stringify(this.arr1) || JSON.stringify(this.TP6) === JSON.stringify(this.arr1) || JSON.stringify(this.TP7) === JSON.stringify(this.arr1) || JSON.stringify(this.TP8) === JSON.stringify(this.arr1)){
 console.log("Winner is user1");
 var x= document.getElementsByClassName("btn-play");
 var i:number;
 for (i=0; i< x.length;i++){
   (<HTMLInputElement>x[i]).setAttribute("disabled", "disabled");
 }
}
if(JSON.stringify(this.TP1) === JSON.stringify(this.arr2) || JSON.stringify(this.TP2) === JSON.stringify(this.arr2) || JSON.stringify(this.TP3) === JSON.stringify(this.arr2) || JSON.stringify(this.TP4) === JSON.stringify(this.arr2) || JSON.stringify(this.TP5) === JSON.stringify(this.arr2) || JSON.stringify(this.TP6) === JSON.stringify(this.arr2) || JSON.stringify(this.TP7) === JSON.stringify(this.arr2) || JSON.stringify(this.TP8) === JSON.stringify(this.arr2)){
  console.log("Winner is user2");
  var x= document.getElementsByClassName("btn-play");
 var i: number;
 for (i=0; i< x.length;i++){
   (<HTMLInputElement>x[i]).setAttribute("disabled", "disabled");
 }
 }
}

}
