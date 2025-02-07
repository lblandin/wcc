import { Component } from '@angular/core';
import { StandardButtonComponent } from '../common/standard-button/standard-button.component';

@Component({
  selector: 'app-header',
  imports: [StandardButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
