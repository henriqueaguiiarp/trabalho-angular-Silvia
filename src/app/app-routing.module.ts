import { EstacoesComponent } from './componentes/estacoes/estacoes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteIdadeComponent } from './componentes/componente-idade/componente-idade.component';
import { TabuadaComponent } from './componentes/tabuada/tabuada.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';

const routes: Routes = [
  { path: 'idade', component: ComponenteIdadeComponent },
  {path: 'estacoes', component: EstacoesComponent },
  {path: 'tabuada', component: TabuadaComponent},
  {path: 'calculadora', component: CalculadoraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
