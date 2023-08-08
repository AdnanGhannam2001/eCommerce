import { Component, Input } from '@angular/core';
import { Color, Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-product-view[product]',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  @Input() product!: Product;
  colors: Color[] = [];
  sizes: string[] = [];
  selectedSize?: string;
  selectedColor?: string;
  progress = 0;
  count = 0;

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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.colors = this.productService.getAvailableColors(this.product);
    this.sizes = this.productService.getAvailableSizes(this.product);
    this.selectedColor = this.colors.at(0)?.value;
    this.selectedSize = this.sizes.at(0);
    this.selectChange();
  }

  selectChange() {
    this.count = this.productService.getCount(this.product, this.selectedSize, this.selectedColor);
    this.progress = (this.count * 100) / this.product.available.length;
  }
}
