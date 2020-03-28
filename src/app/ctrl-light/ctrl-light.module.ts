import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtrlLightPageRoutingModule } from './ctrl-light-routing.module';

import { CtrlLightPage } from './ctrl-light.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtrlLightPageRoutingModule
  ],
  declarations: [CtrlLightPage]
})
export class CtrlLightPageModule {}
