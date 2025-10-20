import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { ApiService } from '../../../services/api.service';
import { ApiResponse } from '../../../interfaces/apiresponse';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ProdListComponent {
constructor (private api:ApiService){}
  products:Product[] = [];
    async ngOnInit() {
      
      this.getAllProducts();

    }
    getAllProducts(){
      this.api.selectAll('products').then((res:ApiResponse)=>{
        if(res.status==200)
          {
            this.products=res.data;
          }
        
      })
    }
    delete(id:number){
      if(window.confirm('biztos törlöd'))
      {
        this.api.delete('products',id).then((res:ApiResponse)=>{
          if(res.status==200){
            alert("Sikeres törlés")
            this.getAllProducts();

          }
          else{
            alert(res.message)
          }
        })
      }
    }

   
}
