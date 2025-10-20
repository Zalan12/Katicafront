import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { ApiResponse } from '../../../interfaces/apiresponse';
import { ApiService } from '../../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class ProdFormComponent implements OnInit{
  categories:Category[] = [];
id:number | undefined=undefined; //Údiós pályázat típus
  newProduct: Product = {
    termekID:0,
    termek:"",
    kategoriaNev:"",
    egyseg:"",
    nettoAr:0
  }
  allProducts: Product[] = []
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.api.select('products',this.id).then((res:ApiResponse)=>{
        this.newProduct=res.data[0]
      })
    }
    this.getAllProducts();
    this.getAllCategories();
  }

  constructor(private api: ApiService, private activatedRoute:ActivatedRoute, private router:Router) { }
  getAllProducts() {
    this.api.selectAll('products').then((res: ApiResponse) => {
      this.allProducts = res.data;

    })
  }
  getAllCategories(){
    this.api.selectAll('categories').then((res:ApiResponse)=>{
      if(res.status==200)
        {
          this.categories=res.data;
        }
      
    })
  }
  save() {
    if (this.newProduct.termek == '') {
      alert('Add meg a termék nevét!!!');
      return;
    }
    let idx = this.allProducts.findIndex(item => item.termek.toLocaleLowerCase() == this.newProduct.termek.toLocaleLowerCase());
    if (idx > -1) {
      alert('Van már ilyen kategoria');
      return;
    }
    if(!this.id){
      this.api.insert('products', this.newProduct).then((res: ApiResponse) => {
        if (res.status == 200) {
          alert("Sikeres adatfelvétel");
          this.newProduct = {
            termekID:0,
            termek:"",
            kategoriaNev:"",
            egyseg:"",
            nettoAr:0
          };
          this.getAllProducts();
        }
        else {
          alert(res.message)
        }
      })
    }
    else{
      console.log(this.newProduct)
      this.api.update('products',this.id,this.newProduct).then((res:ApiResponse)=>{
        if(res.status==200){
          alert("Sikeres adatmódosítás");
          this.router.navigate(['/products']);
        }
        else{alert(res.message)}
      })
    }
    
  }
}
