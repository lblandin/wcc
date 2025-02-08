import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-subscribe-button',
  imports: [ReactiveFormsModule],
  templateUrl: './subscribe-button.component.html',
  styleUrl: './subscribe-button.component.css'
})
export class SubscribeButtonComponent {
  private formBuilder = inject(FormBuilder);

  subscribeForm = this.formBuilder.group({
    email: '',
  });

  onSubmit(): void {
    console.log(this.subscribeForm);
  }
}
