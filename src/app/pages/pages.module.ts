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
import { SharedModule } from "../shared/shared.module";
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from "primeng/panel";
import { SliderModule } from "primeng/slider";
import { AvatarModule } from "primeng/avatar";
import { RadioButtonModule } from "primeng/radiobutton";
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CartComponent } from './cart/cart.component';
import { TableModule } from "primeng/table";
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { InputMaskModule } from "primeng/inputmask";
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [
        HomeComponent,
        CategoriesComponent,
        ProductsComponent,
        ProductComponent,
        AboutUsComponent,
        ContactUsComponent,
        NotFoundComponent,
        FaqsComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        ButtonModule,
        SharedModule,
        PaginatorModule,
        DataViewModule,
        DividerModule,
        CheckboxModule,
        PanelModule,
        SliderModule,
        AvatarModule,
        RadioButtonModule,
        TriStateCheckboxModule,
        TableModule,
        CascadeSelectModule,
        InputMaskModule,
        AccordionModule,
        InputTextModule,
        InputTextareaModule,
        TooltipModule
    ]
})
export class PagesModule { }
