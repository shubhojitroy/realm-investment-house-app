import { Component, Input } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

import { DUMMY_OFFERS } from '../../dummy-offers';

// const randomIndex = Math.floor(Math.random() * DUMMY_OFFERS.length);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isContactPopup = false;

  onShowContactPopup() {
    this.isContactPopup = true;
  }

  onCloseContactPopup() {
    this.isContactPopup = false;
  }

  // selectedOffer = DUMMY_OFFERS[randomIndex];
  offers = DUMMY_OFFERS;

  @Input({ required: true }) offerName!: string;
  @Input({ required: true }) offerNo!: string;

  // get offerPath() {
  //   return (
  //     'https://boardroomlimited.com.au/RealmInvestment/start/' + this.offerNo
  //   );
  // }
  onSelectOffer() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_OFFERS.length);
    // this.selectedOffer = DUMMY_OFFERS[randomIndex];
  }
}
