import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesGroupService } from 'src/app/services/categories-group.service';
import { Category } from 'src/app/services/category.service';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  breadcrumbItems = [
    { label: "Home" },
    { label: "Products" },
  ];

  priceRange = [0, 1000];

  currentLayout = "list";
  products?: Product[];
  categories?: Category[];

  constructor(private categoriesGroupService: CategoriesGroupService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const name = params.get("categoriesGroup") || "";
      // TODO add errors checker
      this.categoriesGroupService.getByName(name)
        .subscribe(val => {
          this.breadcrumbItems.push({ label: val.name });
          this.categories = val.categories;
        });
      this.productService.getAll()
        .subscribe(val => {
          this.products = val;
        });
    });
  }
}
