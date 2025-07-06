import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacaofisicaPage } from './avaliacaofisica.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaofisicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaliacaofisicaPageRoutingModule {}
