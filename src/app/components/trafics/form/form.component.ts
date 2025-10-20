import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Trafic } from '../../../interfaces/trafic';
import { ApiResponse } from '../../../interfaces/apiresponse';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Customer } from '../../../interfaces/customer';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class TraficFormComponent {
  customers:Customer[] = [];
id:number | undefined=undefined; //Údiós pályázat típus
  newTrafic: Trafic = {
    id:0,
    termek:"",
    vevo:"",
    kategoriaId:0,
    kategoriaNev:"",
    egyseg:"",
    nettoar:0,
    mennyiseg:0,
    kiadva:false
    
  }
  allTrafics: Trafic[] = []
  
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.api.select('traffics',this.id).then((res:ApiResponse)=>{
        this.newTrafic=res.data[0]
      })
    }
    this.getAllTrafics();
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

  constructor(private api: ApiService, private activatedRoute:ActivatedRoute, private router:Router) { }
  getAllTrafics() {
    this.api.selectAll('traffics').then((res: ApiResponse) => {
      this.allTrafics = res.data;

    })
  }
  save() {
    if (this.newTrafic.termek == '') {
      alert('Add meg a termék nevét!!!');
      return;
    }

    let idx = this.allTrafics.findIndex(item => item.termek.toLocaleLowerCase() == this.newTrafic.termek.toLocaleLowerCase());
    if (idx > -1) {
      alert('Van már ilyen termek');
      return;
    }
    console.log(this.newTrafic.termek)
    if(!this.id){
      this.api.insert('traffics', this.newTrafic).then((res: ApiResponse) => {
        if (res.status == 200) {
          alert(res.message);
          this.newTrafic = {
            id:0,
            termek:"",
            vevo:"",
            kategoriaId:0,
            kategoriaNev:"",
            egyseg:"",
            nettoar:0,
            mennyiseg:0,
            kiadva:false
            
          };
          this.getAllTrafics();
        }
        else {
          alert(res.message)
        }
      })
    }
    else{
      console.log(this.newTrafic)
      this.api.update('traffics',this.id,this.newTrafic).then((res:ApiResponse)=>{
        if(res.status==200){
          alert(res.message);
          this.router.navigate(['/trafics']);
        }
        else{alert(res.message)}
      })
    }
    
  }
}
