import { Component } from '@angular/core';
@Component({
  selector: 'estacoes.component',
  templateUrl: './estacoes.component.html',
  styleUrls: ['./estacoes.component.css'],
})
export class EstacoesComponent {
  username = "";
  
  clickme() {
    switch (this.username) {
      case 'Janeiro': case 'Fevereiro': case 'Março': 
      this.username = 'INVERNO'
      break 
  case 'Abril': case 'Maio': case 'Junho':
    this.username =  'PRIMAVERA'
      break
  case 'Julho': case 'Agosto': case 'Setembro':
    this.username = 'VERÃO'
      break
  case 'Outubro': case 'Novembro': case 'Dezembro':
    this.username =  'OUTONO'
      break
  default:
    this.username =  'INDEFINIDA'
      break
  }
  }
}
  



