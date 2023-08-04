import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product-list/product-list.component';
import { Category } from '../categories/categories.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  currentLayout = "list"

  products: Product[];
  categories: Category[] = [];

  priceRange = [0, 1000]

  constructor() {
    this.categories = [
      { id: "1", name: "Category 1", img: "/assets/category-placeholder.webp", count: 10 },
      { id: "2", name: "Category 2", img: "/assets/category-placeholder.webp", count: 12 },
      { id: "3", name: "Category 3", img: "/assets/category-placeholder.webp", count: 16 },
      { id: "4", name: "Category 4", img: "/assets/category-placeholder.webp", count: 2 },
      { id: "5", name: "Category 5", img: "/assets/category-placeholder.webp", count: 9 },
      { id: "6", name: "Category 6", img: "/assets/category-placeholder.webp", count: 33 },
      { id: "7", name: "Category 7", img: "/assets/category-placeholder.webp", count: 20 },
      { id: "1", name: "Category 1", img: "/assets/category-placeholder.webp", count: 10 },
      { id: "2", name: "Category 2", img: "/assets/category-placeholder.webp", count: 12 },
      { id: "3", name: "Category 3", img: "/assets/category-placeholder.webp", count: 16 },
      { id: "4", name: "Category 4", img: "/assets/category-placeholder.webp", count: 2 },
      { id: "5", name: "Category 5", img: "/assets/category-placeholder.webp", count: 9 },
      { id: "6", name: "Category 6", img: "/assets/category-placeholder.webp", count: 33 },
      { id: "7", name: "Category 7", img: "/assets/category-placeholder.webp", count: 20 },
      { id: "1", name: "Category 1", img: "/assets/category-placeholder.webp", count: 10 },
      { id: "2", name: "Category 2", img: "/assets/category-placeholder.webp", count: 12 },
      { id: "3", name: "Category 3", img: "/assets/category-placeholder.webp", count: 16 },
      { id: "4", name: "Category 4", img: "/assets/category-placeholder.webp", count: 2 },
      { id: "5", name: "Category 5", img: "/assets/category-placeholder.webp", count: 9 },
      { id: "6", name: "Category 6", img: "/assets/category-placeholder.webp", count: 33 },
      { id: "7", name: "Category 7", img: "/assets/category-placeholder.webp", count: 20 },
    ]
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
        count: 0,
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
