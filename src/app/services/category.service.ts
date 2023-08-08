import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { Observable, concatAll, first, of } from 'rxjs';

export interface Category {
  id: string;
  name: string;
  products?: Product[];
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[];
  categories$: Observable<Category[]>;

  constructor() {
    this.categories = [
      { id: "1", name: "Computers" },
      { id: "2", name: "Desktops & Monitors" },
      { id: "3", name: "Hard Drives & Memory" },
      { id: "4", name: "Networking & Internet" },
      { id: "5", name: "Accessories" },
      { id: "6", name: "Watches" },
      { id: "7", name: "Smart Phones & Tablets" },
    ];
    this.categories$ = of(this.categories);
  }

  getAll() {
    return this.categories$;
  }

  getById(id: string) {
    return this.categories$.pipe(
      concatAll(),
      first((category: Category) => category.id == id));
  }
}
