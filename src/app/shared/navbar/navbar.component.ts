import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { CategoriesGroupService } from 'src/app/services/categories-group.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'ecommerce-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  categories: MenuItem[] = [];
  navigators: MegaMenuItem[] = [];

  constructor(private categoriesGroupService: CategoriesGroupService,
              private navigationService: NavigationService) { }
    
  ngOnInit() {
    this.categoriesGroupService.getAll()
      .subscribe(val => {
        this.categories = val.map(group => {
          // TODO fix url
          return { 
            label: group.name,
            items: group.categories?.map(category => { return { label: category.name, url: "#" } })
          }
        });
      });

    this.navigationService.getAll()
      .subscribe(val => {
        this.navigators = val;
      });
    }
}
