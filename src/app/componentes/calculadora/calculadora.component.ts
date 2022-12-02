import { Component} from '@angular/core';

@Component({
  selector: 'calculadora.component',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent  {
  x: number = 0;
  y:number = 0
  tot = 0
  operacao = ""
  string ='Digite "x" para multiplicar, "/" para dividir, "+" ara somar, "-" para subtrair'

  clickme(){
    if(this.operacao == "+"){
   this.tot = this.x + this.y
    }
    else if(this.operacao =="x"){
      this.tot = this.x * this.y
    }
    else if(this.operacao =="/"){
      this.tot = this.x / this.y
    }
    else if(this.operacao =="-"){
      this.tot = this.x - this.y
    }
}
}
