import { Component, Input } from '@angular/core';
import { CategoriesGroup } from 'src/app/services/categories-group.service';

@Component({
  selector: 'ecommerce-category[category]',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() category!: CategoriesGroup;
}
