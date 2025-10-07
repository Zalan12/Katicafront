import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatComponent } from './components/stat/stat.component';
import { TListComponent } from './components/trafics/list/list.component';
import { CListComponent } from './components/categories/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavbarComponent,FooterComponent,StatComponent,CListComponent,TListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Katicafront';
}
