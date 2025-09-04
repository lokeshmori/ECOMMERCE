import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
        users=['Famous Recipes of Over Restorent '] ;

  getallData(){
       
        
        // const url ="https://dummyjson.com/recipes";
        const url ="https://dummyjson.com/carts";
        
        return this.http.get(url);
        
        
  }


    addProduct(product:Product,user:User):boolean{
       
        let products:Product[] = JSON.parse(localStorage.getItem(user.email) || '[]') ;
        localStorage.setItem(user.email ,JSON.stringify(products));
         
        if(products.length<=5){
 
             products.push(product);

             localStorage.setItem(user.email , JSON.stringify(products)) ;

             return true ;

                   
        }

    
           return false ;
    }
           
    getProduct(user:User):Product[]|null{

                 let products:Product[] = JSON.parse(localStorage.getItem(user.email) || 'null') ;
         
          
             return products ;
    }

     
       deleteProduct(user:User , product:Product){

            let products:Product[] = JSON.parse(localStorage.getItem(user.email) || 'null') ;

                  products = products.filter((p)=>p.id != product.id);

                   localStorage.setItem(user.email , JSON.stringify(products)) ;

                 
       }

    

    


}
