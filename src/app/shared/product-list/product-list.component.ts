import { Component, Input } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-product-list[product]',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() product!: Product;
  flag: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.flag = this.productService.getFlag(this.product);
  }
}
