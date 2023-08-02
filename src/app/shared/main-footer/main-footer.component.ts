import { Component } from '@angular/core';
import { Feature } from './features-item/features-item.component';

@Component({
  selector: 'ecommerce-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent {
  features: Feature[] = [];

  constructor() {
    this.features = [
      {
        title: "Fast Delivery",
        description: "Across West & East India"
      },
      {
        title: "safe payment",
        description: "100% Secure Payment"
      },
      {
        title: "Online Discount",
        description: "Add Multi-buy Discount"
      },
      {
        title: "Help Center",
        description: "Dedicated 24/7 Support"
      },
      {
        title: "Curated items",
        description: "From Handpicked Sellers"
      }
    ];
  }
}
