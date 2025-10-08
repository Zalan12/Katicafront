import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios from 'axios';
import { Category } from '../../../interfaces/category';



@Component({
  selector: 'app-categList',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class CListComponent implements OnInit {

  categories:Category[] = [];
    async ngOnInit() {
      try{
     const response= await axios.get('http://localhost:3000/categories');
     this.categories=response.data;
     console.log(this.categories)
    }
    catch(err:any)
    {
      console.log(err.message)
      alert('Hiba az adatok lekérése során')
    }
    }
}

