import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

        userLogIn=true;
         userData: any ;

             registerUsers :any =[{id : '01' , name:'Lokiesh' , email:'loki@gmail.com',password:'loki'}];

             constructor(private router :Router){

             }

        toggleFunction(){

             this.userLogIn = ! this.userLogIn ;
        }
          
        
            
        
       

        addDetails(val:NgForm){

          console.log(val);
          
          this.userData=val ;

            this.registerUsers.push(val);

          
     this.router.navigate(['profile'],{queryParams:{userData:this.userData.name}} )
                   console.log(this.registerUsers);
                   

        }
         
        loginUser(){
            
           
                    
          
        }

          registerUser(){
                  
                  
          }

         
          
}
