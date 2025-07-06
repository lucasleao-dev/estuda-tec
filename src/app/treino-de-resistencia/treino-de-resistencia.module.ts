import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinoDeResistenciaPageRoutingModule } from './treino-de-resistencia-routing.module';

import { TreinoDeResistenciaPage } from './treino-de-resistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinoDeResistenciaPageRoutingModule
  ],
  declarations: [TreinoDeResistenciaPage]
})
export class TreinoDeResistenciaPageModule {}
