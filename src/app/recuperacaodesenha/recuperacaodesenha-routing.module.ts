import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacaodesenhaPage } from './recuperacaodesenha.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacaodesenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacaodesenhaPageRoutingModule {}
