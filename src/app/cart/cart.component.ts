import { Component, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { Product } from '../model/product';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule ,ProfileComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


    product : Product |null=null ;
    user:User | null = null ;
    savedProd:Product[] | null =null ;

   

  constructor( private productService:ProductService ,private router:ActivatedRoute , private http :HttpClient , private route :Router ,
    private auth:AuthService){

      
    }

        

     
    
        //product :any;

    
             
     

           ngOnInit(){

                 
         
                          this.router.queryParams.subscribe((params)=>{
                          
                           this.product = JSON.parse( params['product']) ;
                     
                            
                    
                 });

             
                  this.user = this.auth.getLoggedInUser();
             this.savedProd= this.productService.getProduct(this.user!);
                  
                    if(this.user && this.product === null){

                         this.route.navigate(['profile']);
                    
                    }
                            
                  

                   
               
       // this.router.data.subscribe((data)=>{this.name=data['name']})
         // this.name =  this.router.snapshot.paramMap.get('name');


                   }

                  

                    buyYourProduct(){

                        
                        
                    }
                    addYourProduct(){

                      
                     
                        this.productService.addProduct(this.product! , this.user!);
                        
                    
                      this.route.navigate(['profile'])
                       console.log('go TO Profile');
                      
                    }


              
}
