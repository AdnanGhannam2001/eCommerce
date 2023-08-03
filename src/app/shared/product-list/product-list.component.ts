import { Component, Input } from '@angular/core';

export type Product = {
  id: string;
  name: string;
  img: string;
  rate: number;
  reviews: number;
  specification: string[];
  count: number;
  cost: number;
  flag: string;
}

@Component({
  selector: 'ecommerce-product-list[product]',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() product!: Product;
}
