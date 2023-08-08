import { Component, Input } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-product-grid[product]',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {
  @Input() product!: Product;
  flag: string | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.flag = this.productService.getFlag(this.product);
  }
}
