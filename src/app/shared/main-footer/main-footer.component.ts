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
        icon: "fa-solid fa-satellite-dish",
        title: "Fast Delivery",
        description: "Across West & East India"
      },
      {
        icon: "fa-solid fa-money-check-dollar",
        title: "safe payment",
        description: "100% Secure Payment"
      },
      {
        icon: "fa-regular fa-percent",
        title: "Online Discount",
        description: "Add Multi-buy Discount"
      },
      {
        icon: "fa-regular fa-comments",
        title: "Help Center",
        description: "Dedicated 24/7 Support"
      },
      {
        icon: "fa-regular fa-calendar-check",
        title: "Curated items",
        description: "From Handpicked Sellers"
      }
    ];
  }
}
