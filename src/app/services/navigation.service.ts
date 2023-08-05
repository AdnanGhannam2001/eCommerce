import { Injectable } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private pages: MegaMenuItem[];
  private pages$: Observable<MegaMenuItem[]>;

  constructor() {
    this.pages = [
      { 
        label: "Home",
        items: [
          [
            { 
              label: "",
              items: [
                { label: "Home 1", url: "/"},
                { label: "Home 2", url: "/"},
                { label: "Home 3", url: "/"}
              ]
            }
          ]
        ]
      },
      { 
        label: "Shop",
        items: [
          [
            { 
              label: "Categories Layout",
              items: [
                { label: "Categories 1", url: "/categories"},
                { label: "Categories 2", url: "/categories"},
                { label: "Categories 3", url: "/categories"},
              ]
            }
          ],
          [
            { 
              label: "Products Layout",
              items: [
                { label: "Products 1", url: "/products"},
                { label: "Products 2", url: "/products"},
                { label: "Products 3", url: "/products"},
                { label: "Products 4", url: "/products"},
                { label: "Products 5", url: "/products"},
              ]
            }
          ],
          [
            { 
              label: "Product Layout",
              items: [
                { label: "Product 1", url: "/product/8c5e2e28-cc71-477f-a46f-dfd75238b9c8"},
                { label: "Product 2", url: "/product/8c5e2e28-cc71-477f-a46f-dfd75238b9c8"},
                { label: "Product 3", url: "/product/8c5e2e28-cc71-477f-a46f-dfd75238b9c8"},
                { label: "Product 4", url: "/product/8c5e2e28-cc71-477f-a46f-dfd75238b9c8"},
              ]
            }
          ],
        ]
      },
      { 
        label: "Pages",
        items: [
          [
            { 
              label: "",
              items: [
                { label: "About Us", url: "/about-us" },
                { label: "FAQs", url: "/faqs" },
                { label: "NotFound", url: "/not-found" },
                { label: "Contact Us", url: "/contact-us" }
              ]
            }
          ]
        ]
      }
    ];

    this.pages$ = of(this.pages);
  }

  getAll() {
    return this.pages$;
  }
}