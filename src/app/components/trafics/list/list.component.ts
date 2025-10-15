import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trafic } from '../../../interfaces/trafic';
import { ApiService } from '../../../services/api.service';
import { ApiResponse } from '../../../interfaces/apiresponse';



@Component({
  selector: 'app-traficList',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TListComponent{
  constructor (private api:ApiService){}
    trafics:Trafic[] = [];
      async ngOnInit() {
        
        this.getAllTrafics();
  
      }
      getAllTrafics(){
        this.api.selectAll('traffics').then((res:ApiResponse)=>{
          if(res.status==200)
            {
              this.trafics=res.data;
            }
          
        })
      }
      delete(id:number){
        if(window.confirm('biztos törlöd'))
        {
          this.api.delete('traffics',id).then((res:ApiResponse)=>{
            if(res.status==200){
              alert(res.message)
              this.getAllTrafics();
  
            }
            else{
              alert(res.message)
            }
          })
        }
      }
}
