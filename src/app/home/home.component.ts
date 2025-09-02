import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    user:string[] |undefined ;

    productdetails:any ;

      constructor(private productservice:ProductService , private router :Router){

      }

      ngOnInit(){
           
            this.user= this.productservice.users;
  
               this.productservice.getallData().subscribe((data:any)=>{

                                 this.productdetails  = data.carts ;
                 console.log(this.productdetails);
                                
               });
              
               

      }

        
         
      addcart( data :any){

                     console.log(data);

                      
                     
                this.router.navigate(['cart'],{queryParams:{product:JSON.stringify(data)}})
               
      }


}
