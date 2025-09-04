import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    user:string[] |undefined ;


       product:Product|null=null ;

    productdetails:any ;

      constructor(private productservice:ProductService , private router :Router ,private auth:AuthService ){

      }

      ngOnInit(){
           
            this.user= this.productservice.users;
  
               this.productservice.getallData().subscribe((data:any)=>{

                              
                                this.productdetails  = data.carts ;
                              
                               
                       console.log(this.productdetails);
                                
               });
              
               

      }

        
         
      addcart( data :Product){
                                    
                                         
                                        this.product = data ;
                                        this.router.navigate(['cart'],{queryParams:{product:JSON.stringify(this.product)}});
                                  
                                         
               
               
      }


}
