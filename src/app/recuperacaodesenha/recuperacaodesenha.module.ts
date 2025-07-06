import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacaodesenhaPageRoutingModule } from './recuperacaodesenha-routing.module';

import { RecuperacaodesenhaPage } from './recuperacaodesenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacaodesenhaPageRoutingModule
  ],
  declarations: [RecuperacaodesenhaPage]
})
export class RecuperacaodesenhaPageModule {}
