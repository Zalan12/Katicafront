import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ProdListComponent {
  constructor(private api:ApiService){}
    products:Product[] = [];
    ngOnInit() {
      this.api.selectAll('products').then(res=>{
        
      });
    }

   
}
