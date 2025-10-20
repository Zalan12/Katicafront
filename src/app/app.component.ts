import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatComponent } from './components/stat/stat.component';
import { TListComponent } from './components/trafics/list/list.component';
import { CListComponent } from './components/categories/list/list.component';
import { ProdFormComponent } from './components/products/form/form.component';
import { ProdListComponent } from './components/products/list/list.component';
import { CustFormComponent } from './components/customers/form/form.component';
import { CustListComponent } from './components/customers/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustFormComponent,CustListComponent,HeaderComponent,ProdFormComponent,ProdListComponent,NavbarComponent,FooterComponent,StatComponent,CListComponent,TListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appTitle = 'Katica Büfé';
  company='Bajai SZC Türr István technikum'
  author='13. szoftverfejlesztő'
}
