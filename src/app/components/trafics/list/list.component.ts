import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import axios from 'axios';
import { Trafic } from '../../../interfaces/trafic';


@Component({
  selector: 'app-traficList',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class TListComponent {
  trafics:Trafic[] = [];
    async ngOnInit() {
      try{
     const response= await axios.get('http://localhost:3000/traffics');
     this.trafics=response.data;
     console.log(this.trafics)
    }
    catch(err:any)
    {
      console.log(err.message)
      alert('Hiba az adatok lekérése során')
    }
    }
}
