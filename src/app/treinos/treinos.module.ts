import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinosPageRoutingModule } from './treinos-routing.module';

import { TreinosPage } from './treinos.page';
import { SafeUrlPipe } from './safe-url.pipe'; // Importe o SafeUrlPipe aqui


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinosPageRoutingModule
  ],
  declarations: [TreinosPage, SafeUrlPipe]
})
export class TreinosPageModule {}
