import { Component } from '@angular/core';
import { StandardButtonComponent } from '../common/standard-button/standard-button.component';
import { SubscribeButtonComponent } from '../common/subscribe-button/subscribe-button.component';

@Component({
  selector: 'app-header',
  imports: [StandardButtonComponent, SubscribeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
