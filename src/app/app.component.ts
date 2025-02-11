import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PricingComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wcc';
}
