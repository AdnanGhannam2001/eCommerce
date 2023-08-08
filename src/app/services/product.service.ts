import { Injectable } from '@angular/core';
import { Observable, concatAll, filter, first, of, take } from 'rxjs';
import { Category } from './category.service';

export interface Color {
  id: string;
  name: string;
  value: string;
};

export interface Review {
  by: any;
  at: number;
  content: string;
  rate: number;
};

export interface Vendor {
  id: string;
  name: string;
};

export interface Product {
  id: string;
  name: string
  createdAt: number;
  category: Category;
  // tag[]?
  price: number;
  description: string;
  information: string[][]; // key: value
  images: { big: string, small: string}[]
  reviews?: Review[];
  rate: number;
  specification: string[]; // 3
  shippingInfo: string;
  returnInfo: string;
  available: { color: Color; size: string; }[];
  vendor: Vendor;
  sale?: number;
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private colors: Color[];
  private colors$: Observable<Color[]>;

  private products: Product[];
  private products$: Observable<Product[]>;

  constructor() {
    this.colors = [
      { id: "1", name: "Black", value: "#000000" },
      { id: "2", name: "Blue", value: "#0000ff" },
      { id: "3", name: "Dark grayish orange", value: "#ffffff" },
      { id: "4", name: "DarkSeaGreen", value: "#8fbc8f" },
      { id: "5", name: "DeepSkyBlue", value: "#00bfff" },
      { id: "6", name: "GhostWhite", value: "#f8f8ff" },
      { id: "7", name: "Lavender", value: "#e6e6fa" },
      { id: "8", name: "LightBlue", value: "#add8e6" },
      { id: "9", name: "MidnightBlue", value: "#191970" },
      { id: "10", name: "Purple", value: "#800080" }
    ];
    this.colors$ = of(this.colors);

    this.products = [
      {
        id: "1",
        name: "Stainless Steel Case with Braided Solo Loop",
        price: 100,
        category: { id: "6", name: "Watches" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "2",
        name: "MacBook Air M1 2020 8GB 256GB/7-Core GPU",
        price: 200,
        category: { id: "1", name: "Computers" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "3",
        name: "Apple Watch Aluminum Case with Sport Loop",
        price: 300,
        category: { id: "6", name: "Watches" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "4",
        name: "TalkWorks iPhone Charger Lightning Cable",
        price: 400,
        category: { id: "5", name: "Accessories" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "5",
        name: "Apple Watch Magnetic Fast Charger to USB-A",
        price: 500,
        category: { id: "6", name: "Watches" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "6",
        name: "Apple Airpods Pro MWP22A M/A Bluetooth 7.1",
        price: 600,
        category: { id: "5", name: "Accessories" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "7",
        name: "Logitech G203 Wired 8000 DPI For PC/Mac",
        price: 700,
        category: { id: "1", name: "Computers" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "8",
        name: "HP Pavilion Core i7 8GB RAM/1TB SSD",
        price: 800,
        category: { id: "3", name: "Hard Drives & Memory" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          // { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          // { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          // { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          // { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          // { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          // { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "9",
        name: "Apple iPad Pro M1 11-inch 2021 Wi-Fi 128GB",
        price: 900,
        category: { id: "7", name: "Smart Phones & Tablets" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "10",
        name: "Apple iPad Air 4 10.9-inch Wi-Fi 256GB",
        price: 1000,
        category: { id: "7", name: "Smart Phones & Tablets" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "11",
        name: "Apple iPhone 11 Pro 256GB Space Gray - Unlocked",
        price: 1000,
        category: { id: "7", name: "Smart Phones & Tablets" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "8", name: "LightBlue", value: "#add8e6" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
      },
      {
        id: "12",
        name: "Samsung Galaxy S21 Ultra 128GB - Black",
        price: 1000,
        category: { id: "7", name: "Smart Phones & Tablets" },
        images: [
          { big: "/assets/product-1-1.webp", small: "/assets/product-1-1-s.avif" },
          { big: "/assets/product-1-2.webp", small: "/assets/product-1-2-s.avif" },
          { big: "/assets/product-1-3.webp", small: "/assets/product-1-3-s.avif" },
        ],
        description: "",
        information: [
          ["Color", "Space Black, Silver, Red"],
          ["Product Type", "New, Renewed, Refurbished, Used"],
          ["Storage", "64GB, 512GB, 2TB"],
          ["Brand", "Apple"],
          ["Display", "10.9-inch Liquid Retina display with True Tone"],
          ["Chip (CPU)", "Apple M1 with 8-core CPU, 8-core GPU"],
          ["Camera and Video", "12MP - 4K Video"],
          ["Front Camera", "12MP Ultra Wide front camera with Center Stage and Smart HDR 3"],
          ["Battery Life", "Up to 10 hours on Wi-Fi, Up to 9 hours using cellular data network"],
          ["In the Box", "iPad Air, USB-C Charge Cable (1 meter), 20W USB-CPower Adapter"],
          ["Height", "9.74 inches (247.6 mm)"],
          ["Width", "7.02 inches (178.5 mm)"],
          ["Weight", "1.0 pound (458 grams) Wi-Fi model; 1.02 pounds (462 grams) Wi-Fi"],
          ["Mobile Network", "5G"],
        ],
        vendor: { id: "1", name: "any" },
        specification: [" Screen Size 10.9 inch", "Operating System iOS 14.0", "Product Length 9.74 inch"],
        shippingInfo: "Complimentary ground shipping within 1 to 7 business days",
        returnInfo: "Easy and complimentary, within 14 days",
        available: [
          { color: { id: "1", name: "Black", value: "#000000" }, size: "128GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "128GB" },
          { color: { id: "10", name: "Purple", value: "#800080" }, size: "128GB" },
          { color: { id: "1", name: "Black", value: "#000000" }, size: "256GB" },
          { color: { id: "3", name: "Dark grayish orange", value: "#ffffff" }, size: "256GB" },
          { color: { id: "8", name: "LightBlue", value: "#add8e6" }, size: "512GB" },
        ],
        createdAt: Date.now(),
        rate: 0
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
      filter((product: Product) => product.id == id),
      take(1));
  }

  getByCategory(category: string) {
    return this.products$.pipe(
      concatAll(),
      filter(product => product.category.name == category));
  }

  getColors() {
    return this.colors$;
  }

  getAvailableColors(product: Product) {
    const colors: Color[] = [];

    product.available.forEach(item => {
      if (colors.every(val => val.name != item.color.name)) {
        colors.push(item.color);
      }
    });

    return colors;
  }

  getAvailableSizes(product: Product) {
    return [...new Set(product.available.map(item => item.size))]
  }

  getCount(product: Product, size?: string, color?: string) {
    return product.available
      .filter(item => item.size === size && item.color.value === color)
      .length;
  }

  filter(products: Product[], 
    available?: boolean,
    price?: [min: number, max: number],
    categories?: string[],
    colors?: Color[],
    sizes?: string[])
  {
    let filtered = products;

    if (available) {
      filtered = filtered.filter(product => product.available.length);
    } else if (available === false) {
      filtered = filtered.filter(product => !product.available.length);
    }

    if (price) {
      filtered = filtered.filter(product => product.price >= price[0] && product.price <= price[1]);
    }

    console.log(categories)
    if (categories) {
      filtered = filtered.filter(product => categories.includes(product.category.name));
    }

    if (colors?.length) {
      filtered = filtered.filter(product => 
        product.available.some(item => 
          colors.some(color => 
            color.name == item.color.name)));
    }

    if (sizes?.length) {
      filtered = filtered.filter(product => 
        product.available.some(item => 
          sizes.some(size => 
            size == item.size)));
    }

    return filtered;
  }
}
