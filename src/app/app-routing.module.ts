import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {  PORTFOLIOComponent} from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{path:'', redirectTo:'home', pathMatch: 'full'},
{path:'home', component:HomeComponent , title: 'Home'},
{path:'about',component:AboutComponent , title: 'About'},
{path:'portfolio',component: PORTFOLIOComponent , title: 'Portfolio'},
{path:'contact',component:ContactComponent , title: 'Contact'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true,})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
