import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FaturamentoComponent } from './faturamento/faturamento.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';


let routes = [
  { path : "resumo", component: ResumoComponent},
  { path : "consultas", component: ConsultaComponent},
  { path : "faturamento", component: FaturamentoComponent},
  { path : "relatorios", component: RelatoriosComponent},
  { path : "**", redirectTo:"/resumo" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
