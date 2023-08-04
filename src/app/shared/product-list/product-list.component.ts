import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-product-list[product]',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() product!: Product;
}
