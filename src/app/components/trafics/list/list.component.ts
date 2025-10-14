import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Trafic } from '../../../interfaces/trafic';
import { ApiService } from '../../../services/api.service';



@Component({
  selector: 'app-traficList',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TListComponent {
  constructor(private api:ApiService){}
  trafics:Trafic[] = [];
    async ngOnInit() {
        
    }
}
