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
  private categoriesGroups: CategoriesGroup[];
  private categoriesGroups$: Observable<CategoriesGroup[]>;

  constructor() {
    this.categoriesGroups = [
      { 
        id: "1", 
        name: "Computer & Desktop", 
        img: "/assets/category.webp",
        categories: [
          { id: "1", name: "Computers" },
          { id: "2", name: "Hard Drives & Memory" },
          { id: "3", name: "Desktops & Monitors" },
          { id: "4", name: "Computer Accessories" },
          { id: "5", name: "Networking & Internet" }
        ]
      },
      { 
        id: "2", 
        name: "Laptop & Ipad", 
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
        name: "Cameras & Photos", 
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
        name: "Smart Phones & Tablets", 
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
        name: "TV & Audios", 
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

  getByName(name: string) {
    return this.categoriesGroups$.pipe(
      concatAll(),
      first((categoriesGroup: CategoriesGroup) => categoriesGroup.name == name));
  }
}
