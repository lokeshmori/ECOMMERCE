import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-02';


   constructor(private auth : AuthService){

      }

    
    user : User | null =null ;

    ngOnInit(){

          this.user = this.auth.getLoggedInUser();
        
            if(this.user !== null){

                  
                     
            }
                
        
    }


          

  

            

}