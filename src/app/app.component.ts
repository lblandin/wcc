import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PricingComponent, FaqComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wcc';
}
