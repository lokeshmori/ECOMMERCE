import { Component, computed, Input, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
     
  constructor(private authenticated :SignupService , private auth:AuthService){

  }

  isLoggedIn =computed(()=> this.authenticated.isAuthenticated()) ;

  
  logout(){
    
               this.authenticated.logout() ;
           this.auth.logout();
  }


}
