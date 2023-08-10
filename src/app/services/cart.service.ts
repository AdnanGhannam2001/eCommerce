import { Injectable } from '@angular/core';
import { Color, Product } from './product.service';
import cart from "../data/cart.json";
import { Observable, filter, map, of } from 'rxjs';

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  selectedColor: Color;
  count: number;
  for: any; // User
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[];
  private cart$: Observable<CartItem[]>;

  constructor() {
    this.cart = cart;
    this.cart$ = of(this.cart);
  }

  getAll(userId: string) {
    return this.cart$.pipe(
      map(cart => cart.filter(cartItem => cartItem.for.id == userId)));
  }

  getCount(userId: string) {
    return this.cart.filter(cartItem => cartItem.for.id == userId).length;
  }
}
