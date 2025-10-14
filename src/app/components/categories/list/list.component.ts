import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../../../interfaces/category';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-categList',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class CListComponent implements OnInit {
  constructor (private api:ApiService){}
  categories:Category[] = [];
    async ngOnInit() {
      this.api.selectAll('categoires').then(res=>{
      
      });
    }
}

