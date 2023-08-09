import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesGroupService } from 'src/app/services/categories-group.service';
import { Category } from 'src/app/services/category.service';
import { Color, Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedColors: Color[] = [];
  selectedSizes: string[] = [];
  selectedCategories: string[] = [];
  availability?: boolean;

  breadcrumbItems = [
    { label: "Home" },
    { label: "Products" },
  ];

  priceRange: [number, number] = [0, 1000];

  sortOptions = [
    { label: "Sort By Name Asc", value: "name" },
    { label: "Sort By Name Desc", value: "!name" },
    { label: "Sort By Price Asc", value: "price" },
    { label: "Sort By Price Desc", value: "!price" }
  ];

  sortOrder!: number;
  sortField!: string;

  currentLayout = "list";
  products?: Product[];
  displayProducts?: Product[];
  categories?: Category[];
  colors?: Color[];

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
    });

    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      const query = queryParams.get("query") || "";
      this.productService.getAll(query)
        .subscribe(val => {
          this.products = val;
          this.displayProducts = this.products;
        });
      this.productService.getColors()
        .subscribe(val => this.colors = val);
    })
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  applyFilter() {
    console.log(this.availability);
    if (this.products) {
      this.displayProducts = this.productService.filter(this.products,
        this.availability,
        this.priceRange,
        this.selectedCategories,
        this.selectedColors);
    }
  }
}
