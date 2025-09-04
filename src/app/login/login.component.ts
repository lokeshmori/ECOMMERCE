import { NgIf } from '@angular/common';
import { Component, computed } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

        userLogIn=true;
         user : User ={username:'', email:'',password:''} ;
         userData :any ;
         message : string='' ;

           

            

             constructor(private auth:AuthService,private router :Router,private authenticated :SignupService){

             }
                
               
                
           
                
        toggleFunction(){

             this.userLogIn = ! this.userLogIn ;
             this.message ='' ;
        }
          
        
            
        
       

        addDetails(val:NgForm){

        
                   

          
       this.router.navigate(['profile'],{queryParams:{userData:this.userData.name}} )
                  
                   

        }
         
        login(val:NgForm){


          this.userData =val;

          
            
               const success =   this.auth.login(this.userData.email , this.userData.password);
              
              if(success){
                             this.authenticated.login();
                    this.router.navigate(['profile']) ;
              }else{
                this.message ="Invalid Email Or Password" ;
              }
           
                    
          
        }

          register(val:NgForm){
            this.userData =val;

          console.log(this.userData.email , this.userData.password ,this.userData.name);

          this.user.email = this.userData.email ;
           this.user.password = this.userData.password
             this.user.username =this.userData.name ;

               const success = this.auth.register(this.user) ;

               this.message = success ? 'Registration successful!' : 'User already exists!' ;

                 
           
           
                   
                  
                   
          }

         
          
}
