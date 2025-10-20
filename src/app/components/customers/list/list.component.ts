import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../interfaces/customer';
import { ApiService } from '../../../services/api.service';
import { ApiResponse } from '../../../interfaces/apiresponse';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class CustListComponent {
constructor (private api:ApiService){}
  customers:Customer[] = [];
    async ngOnInit() {
      
      this.getAllCustomers();

    }
    getAllCustomers(){
      this.api.selectAll('customers').then((res:ApiResponse)=>{
        if(res.status==200)
          {
            this.customers=res.data;
          }
        
      })
    }
    delete(id:number){
      if(window.confirm('biztos törlöd'))
      {
        this.api.delete('customers',id).then((res:ApiResponse)=>{
          if(res.status==200){
            alert('Adat sikeresen törölve')
            this.getAllCustomers();

          }
          else{
            alert(res.message)
          }
        })
      }
    }
}
