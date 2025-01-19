import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { PrivacyComponent } from '../../pages/privacy/privacy.component';
import { TermsComponent } from '../../pages/terms/terms.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HomeComponent, PrivacyComponent, TermsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}
