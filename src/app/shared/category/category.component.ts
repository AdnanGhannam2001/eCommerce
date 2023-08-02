import { Component, Input } from '@angular/core';
import { Category } from 'src/app/pages/categories/categories.component';

@Component({
  selector: 'ecommerce-category[category]',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category!: Category;
}
