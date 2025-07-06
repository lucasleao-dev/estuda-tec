import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvaliacaofisicaPageRoutingModule } from './avaliacaofisica-routing.module';

import { AvaliacaofisicaPage } from './avaliacaofisica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvaliacaofisicaPageRoutingModule
  ],
  declarations: [AvaliacaofisicaPage]
})
export class AvaliacaofisicaPageModule {}
