import { Component, Input } from '@angular/core';
import { Product } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-product-view[product]',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input() product!: Product;

  reviewDialogVisible = false;

  currentImage = 0;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
