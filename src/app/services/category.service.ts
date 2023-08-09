import { Injectable } from '@angular/core';
import { Product } from './product.service';
import { Observable, concatAll, first, of } from 'rxjs';
import categories from "../data/categories.json";

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
    this.categories = categories;
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
