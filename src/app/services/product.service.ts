import { Injectable } from '@angular/core';
import { Observable, concatAll, filter, first, of } from 'rxjs';

export interface Product {
  id: string;
  name: string
  category?: string;
  price: number;
  information?: string[][];
  // description: 
  mainImage: string;
  images?: string[];
  review?: string[];
  description: string[];
  shippingInfo: string;
  returnInformation: string;
  availableColors?: string[][];
  available: number;
  // vendor
  // tag[]?
  createdAt: number;
  sale?: number;
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  products$: Observable<Product[]>;

  constructor() {
    this.products = [
      {
        id: "1",
        name: "Stainless Steel Case with Braided Solo Loop",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "2",
        name: "MacBook Air M1 2020 8GB 256GB/7-Core GPU",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "3",
        name: "Apple Watch Aluminum Case with Sport Loop",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "4",
        name: "TalkWorks iPhone Charger Lightning Cable",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "5",
        name: "Apple Watch Magnetic Fast Charger to USB-A",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "6",
        name: "Apple Airpods Pro MWP22A M/A Bluetooth 7.1",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "7",
        name: "Logitech G203 Wired 8000 DPI For PC/Mac",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "8",
        name: "HP Pavilion Core i7 8GB RAM/1TB SSD",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "9",
        name: "Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "10",
        name: "Apple iPad Air 4 10.9-inch Wi-Fi 256GB",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "11",
        name: "Apple iPhone 11 Pro 256GB Space Gray - Unlocked",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
      {
        id: "12",
        name: "Samsung Galaxy S21 Ultra 128GB - Black",
        price: 500,
        mainImage: "/assets/product.webp",
        description: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInformation: "Easy and complimentary, within 14 days",
        available: 1,
        createdAt: Date.now(),
      },
    ];
    this.products$ = of(this.products);
  }

  getAll() {
    return this.products$;
  }

  getById(id: string) {
    return this.products$.pipe(
      concatAll(),
      first((product: Product) => product.id == id));
  }

  getByCategory(category: string) {
    return this.products$.pipe(
      concatAll(),
      filter(product => product.category == category));
  }
}
