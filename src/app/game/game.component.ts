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
  arr1 : number[]= [0,0,0,0,0,0,0,0,0];

  constructor() { }

  ngOnInit(): void {
  }
  btnClick1(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
    (event.target as HTMLButtonElement).textContent = "O";
    }
    else{
      (event.target as HTMLButtonElement).textContent = "X";
    };
    this.arr1[0]=1;
    this.user=!this.user;
  };
  btnClick2(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[1]=1;
      this.user=!this.user;
  };
  btnClick3(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[2]=1;
      this.user=!this.user;
  };
  
  btnClick4(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[3]=1;
      this.user=!this.user;
  };
  btnClick5(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[4]=1;
      this.user=!this.user;
  };
  btnClick6(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[5]=1;
      this.user=!this.user;
  };
  btnClick7(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[6]=1;
      this.user=!this.user;
  };
  btnClick8(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[7]=1;
      this.user=!this.user;
  };
  btnClick9(event: MouseEvent) {
    (event.target as HTMLButtonElement).disabled = true;
    if(this.user){
      (event.target as HTMLButtonElement).textContent = "O";
      }
      else{
        (event.target as HTMLButtonElement).textContent = "X";
      };
      this.arr1[8]=1;
      this.user=!this.user;
  };
}
