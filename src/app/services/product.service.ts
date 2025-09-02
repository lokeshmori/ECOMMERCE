import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    


}
