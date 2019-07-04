import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuartosComponent } from './componentes/cuartos/cuartos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { DatospersonalesComponent } from './componentes/datospersonales/datospersonales.component';
import { AllcuartosComponent } from './componentes/allcuartos/allcuartos.component';
import { RoomselectedComponent } from './componentes/roomselected/roomselected.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

const routes: Routes = [
  { path: 'cuartos', component: CuartosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'datospersonales', component: DatospersonalesComponent },
  { path: 'allcuartos', component: AllcuartosComponent },
  { path: 'roomselected', component: RoomselectedComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: '**', redirectTo: 'cuartos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
