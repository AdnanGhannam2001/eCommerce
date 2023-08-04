import { Component, OnInit } from '@angular/core';
import { CategoriesGroup, CategoriesGroupService } from 'src/app/services/categories-group.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  loading = true;

  breadcrumbItems = [
    { label: "Home" },
    { label: "Categories" },
  ];

  categories: CategoriesGroup[] = [];

  constructor(private categoriesGroupService: CategoriesGroupService) { }

  ngOnInit(): void {
    this.categoriesGroupService.getAll()
      .subscribe({
        next: val => {
          this.categories = val;
          this.loading = false;
        },
        error: err => {
          // TODO Add error toast
        }
      });
  }
}
