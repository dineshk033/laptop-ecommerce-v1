import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebLoginComponent } from './web-login/web-login.component';
import { WebSignUpComponent } from './web-sign-up/web-sign-up.component';


const routes: Routes = [
  {path:'login', component:WebLoginComponent},
  {path:'signup',component:WebSignUpComponent},
  { path:'',redirectTo:'customers', pathMatch: 'full'},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
