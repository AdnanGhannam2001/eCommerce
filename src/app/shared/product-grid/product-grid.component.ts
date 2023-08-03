import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product-list.component';

@Component({
  selector: 'ecommerce-product-grid[product]',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input() product!: Product;
}
