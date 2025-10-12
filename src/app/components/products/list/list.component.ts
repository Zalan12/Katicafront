import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Product } from '../../../interfaces/product';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ProdListComponent {
    products:Product[] = [];
    async ngOnInit() {
      try{
     const response= await axios.get('http://localhost:3000/products');
     this.products=response.data;
     console.log(this.products)
    }
    catch(err:any)
    {
      console.log(err.message)
      alert('Hiba az adatok lekérése során')
    }
    }
}
