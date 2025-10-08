import { Component, Input, input } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title:string='';
}
