import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { Customer } from '../../../interfaces/customer';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CustListComponent {
  customers:Customer[] = [];
    async ngOnInit() {
      try{
     const response= await axios.get('http://localhost:3000/customers');
     this.customers=response.data;
     console.log(this.customers)
    }
    catch(err:any)
    {
      console.log(err.message)
      alert('Hiba az adatok lekérése során')
    }
    }
}
