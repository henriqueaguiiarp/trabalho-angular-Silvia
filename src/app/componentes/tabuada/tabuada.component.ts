import { Component} from '@angular/core';

@Component({
  selector: 'tabuada.component',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent  {
  tabuada = 0;

  clickme(){
   
    for(let i = 0; i <=10; i++){
      document.writeln(`  ${this.tabuada} x ${i} = ${ this.tabuada *i }</br>`)      
    }
  }
}
