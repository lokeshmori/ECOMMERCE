import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


   private storageKey = 'users' ;
   private loggedInUserKey = 'loggedInUser' ;
    
  constructor() { }

           
        register(user : User):boolean{

                   
          let users :User[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');


             if(users.find(u=>u.email===user.email)){

                    return false ;
             }
              
              if(users.length <= 5){ 
              users.push(user);
              localStorage.setItem(this.storageKey,JSON.stringify(users)) ;

                return true
              }
              return false ;
        }

        login(email : string , password:string):boolean{

                let users:User[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]') ;
             
                  const user = users.find(u => u.email===email && u.password==password) ;

                  if(user){
 

                      localStorage.setItem(this.loggedInUserKey,JSON.stringify(user)) ;

                        return true ;
                  }
                   
                      
                   

           return false ;

        }

         getLoggedInUser(): User | null {
    return JSON.parse(localStorage.getItem(this.loggedInUserKey) || 'null');
  }

  logout(): void {
    localStorage.removeItem(this.loggedInUserKey);
    
  }

}
