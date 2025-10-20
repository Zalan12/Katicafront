import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiResponse } from '../../../interfaces/apiresponse';
import { ApiService } from '../../../services/api.service';
import { Category } from '../../../interfaces/category';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CategFormComponent implements OnInit {

  id:number | undefined=undefined; //Údiós pályázat típus
  newCategory: Category = {
    id: 0,
    kategoriaNev: ""
  }
  allCategories: Category[] = []
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.api.select('categories',this.id).then((res:ApiResponse)=>{
        this.newCategory=res.data[0]
      })
    }
    this.getAllCategories();
  }

  constructor(private api: ApiService, private activatedRoute:ActivatedRoute, private router:Router) { }
  getAllCategories() {
    this.api.selectAll('categories').then((res: ApiResponse) => {
      this.allCategories = res.data;

    })
  }
  save() {
    if (this.newCategory.kategoriaNev == '') {
      alert('Add meg a kategória nevét!!!');
      return;
    }
    let idx = this.allCategories.findIndex(item => item.kategoriaNev.toLocaleLowerCase() == this.newCategory.kategoriaNev.toLocaleLowerCase());
    if (idx > -1) {
      alert('Van már ilyen kategoria');
      return;
    }
    if(!this.id){
      this.api.insert('categories', this.newCategory).then((res: ApiResponse) => {
        if (res.status == 200) {
          alert("Sikeres adatfelvétel");
          this.newCategory = {
            id: 0,
            kategoriaNev: ''
          };
          this.getAllCategories();
        }
        else {
          alert(res.message)
        }
      })
    }
    else{
      console.log(this.newCategory)
      this.api.update('categories',this.id,this.newCategory).then((res:ApiResponse)=>{
        if(res.status==200){
          alert("Sikeres módosítás");
          this.router.navigate(['/categories']);
        }
        else{alert(res.message)}
      })
    }
    
  }
}
