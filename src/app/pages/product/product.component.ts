import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product, ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product?: Product;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id");

      this.productService.getById(id!).subscribe({
        next: val => {
          this.product = val;
        },
        complete: () => {
          // NOT_FOUND
          if (!this.product) {
            this.router.navigate(["not-found"])
          }
        }
      });
    });
  }
}
