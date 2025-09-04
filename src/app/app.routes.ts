import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [{
    path:'',component :HomeComponent  
},{path:'about',component:AboutComponent}
,{
    path:'login',component:LoginComponent
},{
    path:'profile',component:ProfileComponent
},{
    path:'cart',component:CartComponent
},{
    path:'contact',component:ContactComponent
}
,{
    path:'**' ,component:NotfoundComponent
}
];
