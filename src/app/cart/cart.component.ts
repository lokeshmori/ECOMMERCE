import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule ,ProfileComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


 

   

  constructor( private productService:ProductService ,private router:ActivatedRoute , private http :HttpClient , private route :Router){

      
    }

         login:boolean=true ;

     
    
        product :any;

    
             
     

           ngOnInit(){

             this.router.queryParams.subscribe((params)=>{
                     this.product = JSON.parse( params['product']) ;
                    
                 })

                    console.log('in cart');
                    
               console.log(this.product);
               
       // this.router.data.subscribe((data)=>{this.name=data['name']})
         // this.name =  this.router.snapshot.paramMap.get('name');

                    if(this.product.id==null){

                        this.login = false ;

                    }else{

                       this.login =true ;
                    }
                     
             
                   
                   }

                  

                    buyYourProduct(){

                        
                        
                    }
                    addYourProduct(){
                    
                      this.route.navigate(['profile'],{queryParams:{title:this.product.title,price:this.product.title}} )
                   console.log();
                      
                    }


              
}
