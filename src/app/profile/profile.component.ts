import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

        signal :string = " ";

        title:string|undefined ;

        userName :string | undefined ;

        user : User | null = null ;
        products : Product[] | null =null ;
        

        constructor(private router :ActivatedRoute ,private auth : AuthService , private productService:ProductService){

                      

        }

           ngOnInit(){
                 
              this.user = this.auth.getLoggedInUser();   

              this.userName = this.user?.username ;

              if(this.user !==null){
                 this.products = this.productService.getProduct(this.user!);
                 console.log(this.products);
                  
                 this.signal='cart' ;
              }
                          
                        
            
           }

             carts: any[]=[{title:'Apple 12 pro' , price : 5900} ,{title:'Rolex Submariner Watch' , price : 5000} ];
             orders :any[]=[{title:'Apple 12 pro' , price : 5900, delvary:'23-5-25'},{title:'Rolex Submariner Watch' , price : 5000 ,delivary:'31-05-25'}] ;
             address:string="House no 568 Noida New Delhi zipcode-485643"
             message='Shoping Now';
             offer='There is No Special Offer Now';





      showUpdate(val : string){

       console.log(val);

           this.signal = val ;
           
               

      }

      logout(){
          
             this.auth.logout() ;

               
      }
            buyYourProduct(){

                  

                      
            }

             removeProduct(product:Product){
                  
                  this.productService.deleteProduct(this.user!,product);
                   console.log(product);
                   
                  
             }
        
}
