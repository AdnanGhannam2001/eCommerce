import { Injectable } from '@angular/core';
import { Observable, concatAll, first, of } from "rxjs";
import { Category } from './category.service';

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
  categoriesGroups: CategoriesGroup[];
  categoriesGroups$: Observable<CategoriesGroup[]>;

  constructor() {
    this.categoriesGroups = [
      { 
        id: "1", 
        name: "Computer & Desktop", 
        img: "/assets/category.webp",
        categories: [
          { id: "1", name: "Computers" },
          { id: "2", name: "Desktops & Monitors" },
          { id: "3", name: "Hard Drives & Memory" },
          { id: "4", name: "Networking & Internet" },
          { id: "5", name: "Computer Accessories" }
        ]
      },
      { 
        id: "2", 
        name: "Computer & Desktop", 
        img: "/assets/category.webp",
        categories: [
          { id: "1", name: "Computers" },
          { id: "2", name: "Desktops & Monitors" },
          { id: "3", name: "Hard Drives & Memory" },
          { id: "4", name: "Networking & Internet" },
          { id: "5", name: "Computer Accessories" }
        ]
      },
      { 
        id: "3", 
        name: "Computer & Desktop", 
        img: "/assets/category.webp",
        categories: [
          { id: "1", name: "Computers" },
          { id: "2", name: "Desktops & Monitors" },
          { id: "3", name: "Hard Drives & Memory" },
          { id: "4", name: "Networking & Internet" },
          { id: "5", name: "Computer Accessories" }
        ]
      },
      { 
        id: "4", 
        name: "Computer & Desktop", 
        img: "/assets/category.webp",
        categories: [
          { id: "1", name: "Computers" },
          { id: "2", name: "Desktops & Monitors" },
          { id: "3", name: "Hard Drives & Memory" },
          { id: "4", name: "Networking & Internet" },
          { id: "5", name: "Computer Accessories" }
        ]
      },
      { 
        id: "5", 
        name: "Computer & Desktop", 
        img: "/assets/category.webp",
        categories: [
          { id: "1", name: "Computers" },
          { id: "2", name: "Desktops & Monitors" },
          { id: "3", name: "Hard Drives & Memory" },
          { id: "4", name: "Networking & Internet" },
          { id: "5", name: "Computer Accessories" }
        ]
      },
    ];
    this.categoriesGroups$ = of(this.categoriesGroups);
  }

  getAll() {
    return this.categoriesGroups$;
  }

  getById(id: string) {
    return this.categoriesGroups$.pipe(
      concatAll(),
      first((categoriesGroup: CategoriesGroup) => categoriesGroup.id == id));
  }
}
