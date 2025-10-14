import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CustListComponent {
  constructor(private api:ApiService){}
  customers:Customer[] = [];
    async ngOnInit() {
      this.api.selectAll('customers ').then(res=>{
       
      });
    }
}
