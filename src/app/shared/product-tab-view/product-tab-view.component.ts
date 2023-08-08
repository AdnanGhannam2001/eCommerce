import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-product-tab-view[product]',
  templateUrl: './product-tab-view.component.html',
  styleUrls: ['./product-tab-view.component.scss']
})
export class ProductTabViewComponent {
  @Input() product!: Product;
}
