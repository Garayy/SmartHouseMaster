import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtrlLightPage } from './ctrl-light.page';

const routes: Routes = [
  {
    path: '',
    component: CtrlLightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtrlLightPageRoutingModule {}
