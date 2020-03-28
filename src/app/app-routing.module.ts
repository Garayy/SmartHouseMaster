import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
  //   canActivate:[LoginGuard, IntroGuard]
  // },
  {
    path: 'ctrl-doors',
    loadChildren: () => import('./ctrl-doors/ctrl-doors.module').then( m => m.CtrlDoorsPageModule)
  },
  {
    path: 'ctrl-light',
    loadChildren: () => import('./ctrl-light/ctrl-light.module').then( m => m.CtrlLightPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
