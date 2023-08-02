import { Component, Input } from '@angular/core';

export type Feature = {
  icon?: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'ecommerce-features-item',
  templateUrl: './features-item.component.html',
  styleUrls: ['./features-item.component.scss']
})
export class FeaturesItemComponent {
  @Input() feature: Feature = {};
}
