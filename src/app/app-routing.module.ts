import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'loged', component:LayoutComponent,
  children:[
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      // { path: 'detail/:id', loadChildren: () => import('./components/pokemon-detail/pokemon-detail.module').then(m => m.PokemonDetailModule) },
    ] 
  },
  { path: '**', pathMatch: 'full', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
