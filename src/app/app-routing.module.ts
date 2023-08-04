import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { MainComponent } from './templates/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "categories", component: CategoriesComponent },
      { path: "products/:categoriesGroup", component: ProductsComponent },
      { path: "product/:id", component: ProductComponent },
      { path: "about-us", component: AboutUsComponent },
      { path: "contact-us", component: ContactUsComponent },
      { path: "faqs", component: FaqsComponent },
      { path: "**", component: NotFoundComponent }
    ]
  },
  {
    path: "dashboard", 
    component: DashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
