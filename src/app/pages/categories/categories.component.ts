import { Component } from '@angular/core';
import { CategoriesGroupService } from 'src/app/services/categories-group.service';

export type Category = {
  id: string;
  name: string;
  img: string;
  count: number;
};

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  breadcrumbItems = [
    { label: "Home" },
    { label: "Categories" },
  ];
  categories: Category[] = [];

  constructor(private categoriesGroupService: CategoriesGroupService) {
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
  }
}
