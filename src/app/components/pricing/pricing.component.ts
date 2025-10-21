import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { ApiResponse } from '../../interfaces/apiresponse';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  constructor (private api:ApiService){}
    products:Product[] = [];
    categories:Category[]=[];
      async ngOnInit() {
        
        this.getAllProducts();
        this.getAllCategories();
  
      }
      getAllProducts(){
        this.api.selectAll('products').then((res:ApiResponse)=>{
          if(res.status==200)
            {
              this.products=res.data;
            }
          
        })
      }
      getAllCategories(){
        this.api.selectAll('categories').then((res:ApiResponse)=>{
          if(res.status==200)
            {
              this.categories=res.data;
            }
          
        })
      }
      
}
