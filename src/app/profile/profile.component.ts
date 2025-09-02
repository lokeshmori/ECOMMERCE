import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

        signal :string = " ";

        userName :string | undefined ;
        

        constructor(private router :ActivatedRoute){

                      

        }

           ngOnInit(){
                 
             this.router.queryParams.subscribe((param)=>{
                        console.log(param['userData']);

                     this.userName = param['userData']

                        
             })
           }

             carts: any[]=[{title:'Apple 12 pro' , price : 5900} ,{title:'Rolex Submariner Watch' , price : 5000} ];
             orders :any[]=[{title:'Apple 12 pro' , price : 5900, delvary:'23-5-25'}] ;
             address:string="House NO 568 Noida New Delhi zipcode-485643"

             whitelist='Shoping Now';





      showUpdate(val : string){

console.log(val);

           this.signal = val ;
           
               

      }
}
