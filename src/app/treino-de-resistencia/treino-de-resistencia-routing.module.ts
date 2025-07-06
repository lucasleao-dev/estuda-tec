import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinoDeResistenciaPage } from './treino-de-resistencia.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoDeResistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreinoDeResistenciaPageRoutingModule {}
