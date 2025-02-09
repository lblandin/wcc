import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PricingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wcc';
}
