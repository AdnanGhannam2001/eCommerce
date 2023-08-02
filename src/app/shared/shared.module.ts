import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FormsModule } from '@angular/forms';

import { TieredMenuModule } from "primeng/tieredmenu";
import { ButtonModule } from "primeng/button";
import { MegaMenuModule } from "primeng/megamenu";
import { MenuModule } from "primeng/menu";
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from "primeng/badge";
import { MainFooterComponent } from './main-footer/main-footer.component';
import { FeaturesItemComponent } from './main-footer/features-item/features-item.component'
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CategoryComponent } from './category/category.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LogoComponent,
    MainHeaderComponent,
    MainFooterComponent,
    FeaturesItemComponent,
    BreadcrumbComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TieredMenuModule,
    ButtonModule,
    MegaMenuModule,
    MenuModule,
    InputTextModule,
    MultiSelectModule,
    DialogModule,
    AvatarModule,
    BadgeModule,
    AccordionModule,
    BreadcrumbModule
  ],
  exports: [
    NavbarComponent,
    LogoComponent,
    MainHeaderComponent,
    MainFooterComponent,
    BreadcrumbComponent,
    CategoryComponent
  ]
})
export class SharedModule { }
