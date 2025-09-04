import { Injectable, signal } from '@angular/core';
import { single } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

 

     isAuthenticated = signal(false);


     login(){
        this.isAuthenticated.set(true)
     }

     logout(){
         this.isAuthenticated.set(false);
     }

}
