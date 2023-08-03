import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product-list/product-list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  currentLayout = "grid"

  products: Product[];

  constructor() {
    this.products = [
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
      { 
        id: "1", 
        name: "Stainless Steel Case with Braided Solo Loop",
        specification: ["Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        cost: 800,
        count: 2,
        flag: "New",
        img: "/assets/category-placeholder.webp",
        rate: 4.4,
        reviews: 234
      },
    ]
  }
}
