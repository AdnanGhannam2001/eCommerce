import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AppRoutingModule } from '../app-routing.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ButtonModule
  ]
})
export class PagesModule { }
