import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtrlDoorsPageRoutingModule } from './ctrl-doors-routing.module';

import { CtrlDoorsPage } from './ctrl-doors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtrlDoorsPageRoutingModule
  ],
  declarations: [CtrlDoorsPage]
})
export class CtrlDoorsPageModule {}
