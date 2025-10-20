import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Customer } from '../../../interfaces/customer';
import { ApiResponse } from '../../../interfaces/apiresponse';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CustFormComponent {
  id:number | undefined=undefined; //Údiós pályázat típus
    newCustomers: Customer = {
      vevoID:0,
      vevoNev:""
    }
    allCustomers: Customer[] = []
    ngOnInit(): void {
      this.id=this.activatedRoute.snapshot.params['id'];
      if(this.id){
        this.api.select('customers',this.id).then((res:ApiResponse)=>{
          this.newCustomers=res.data[0]
        })
      }
      this.getAllCustomers();
    }
  
    constructor(private api: ApiService, private activatedRoute:ActivatedRoute, private router:Router) { }
    getAllCustomers() {
      this.api.selectAll('customers').then((res: ApiResponse) => {
        this.allCustomers = res.data;
  
      })
    }
    save() {
      if (this.newCustomers.vevoNev == '') {
        alert('Add meg a vevő nevét!!!');
        return;
      }
      let idx = this.allCustomers.findIndex(item => item.vevoNev.toLocaleLowerCase() == this.newCustomers.vevoNev.toLocaleLowerCase());
      if (idx > -1) {
        alert('Van már ilyen vevő');
        return;
      }
      if(!this.id){
        this.api.insert('customers', this.newCustomers).then((res: ApiResponse) => {
          if (res.status == 200) {
            alert(res.message);
            this.newCustomers = {
              vevoID:0,
              vevoNev:""
            };
            this.getAllCustomers();
          }
          else {
            alert(res.message)
          }
        })
      }
      else{
        console.log(this.newCustomers)
        this.api.update('customers',this.id,this.newCustomers).then((res:ApiResponse)=>{
          if(res.status==200){
            alert('Sikeres adatmódosítás');
            this.router.navigate(['/customers']);
          }
          else{alert(res.message)}
        })
      }
      
    }
}
