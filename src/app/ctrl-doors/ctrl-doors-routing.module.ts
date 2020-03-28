import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtrlDoorsPage } from './ctrl-doors.page';

const routes: Routes = [
  {
    path: '',
    component: CtrlDoorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtrlDoorsPageRoutingModule {}
