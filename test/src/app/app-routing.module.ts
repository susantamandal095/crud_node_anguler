import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SinupComponent } from './sinup/sinup.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


const routes: Routes = [

  {path:'',redirectTo: '/login',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'nav',component:NavComponent},
  {path:'sinup',component:SinupComponent},
  {path:'login',component:LoginComponent},
  {path:'side',component:SideMenuComponent},
  
  




  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
