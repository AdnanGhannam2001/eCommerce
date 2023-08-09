import { Injectable } from '@angular/core';
import { Observable, concatAll, filter, first, map, of, retry, take } from 'rxjs';
import { Category } from './category.service';
import products from "../data/products.json";
import colors from "../data/colors.json";

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

export interface Sale {
  startedAt: number;
  endsAt: number;
  value: number;
}

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
  sale?: Sale;
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
    this.colors = colors;
    this.colors$ = of(this.colors);

    this.products = products;
    this.products$ = of(this.products);
  }

  getAll(value: string = "") {
    return this.products$.pipe(
      map(products => 
        products.filter(product => 
          product.name.toLocaleLowerCase().includes(value?.toLocaleLowerCase() || ""))));
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

  getFlag(product: Product) {
    if (product.sale) {
      return "-" + product.sale.value + "%"
    }

    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; 
    if (product.createdAt > Date.now() - oneWeekInMilliseconds) {
      return "New";
    }

    return null;
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

    if (categories?.length) {
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
