import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'ecommerce-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  categories: MenuItem[] = [];
  navigators: MegaMenuItem[] = [];
    
  ngOnInit() {
    this.categories = [
      { 
        label: "Computer & Desktop",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Laptop & Ipad",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Cameras & Photos",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Smart Phones & Tablets",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Home & Kitchen",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "TV & Audios",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Health & Beauty",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Watches & Eyewear",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Top Deals",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Top Selling Products",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
      { 
        label: "Top Featured Products",
        items: [
          { label: "Computers", url: "#" },
          { label: "Desktops & Monitors", url: "#" },
          { label: "Hard Drives & Memory", url: "#" },
          { label: "Printers & Ink", url: "#" },
          { label: "Networking & Internet", url: "#" },
          { label: "Computer Accessories", url: "#" },
          { label: "Software Computers", url: "#" }
        ]
      },
    ];
    
    this.navigators = [
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
  }
}
