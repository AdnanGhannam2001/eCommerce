import { Injectable } from '@angular/core';
import { Observable, concatAll, first, of } from "rxjs";
import { Category } from './category.service';
import categoriesGroups from "../data/categoriesGroups.json";

export interface CategoriesGroup {
  id: string;
  name: string;
  img: string;
  categories?: Category[];
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesGroupService {
  private categoriesGroups: CategoriesGroup[];
  private categoriesGroups$: Observable<CategoriesGroup[]>;

  constructor() {
    this.categoriesGroups = categoriesGroups;
    this.categoriesGroups$ = of(this.categoriesGroups);
  }

  getAll() {
    return this.categoriesGroups$;
  }

  getByName(name: string) {
    return this.categoriesGroups$.pipe(
      concatAll(),
      first((categoriesGroup: CategoriesGroup) => categoriesGroup.name == name));
  }
}
