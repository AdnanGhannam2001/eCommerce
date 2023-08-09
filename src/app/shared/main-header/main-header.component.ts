import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { CategoriesGroup, CategoriesGroupService } from 'src/app/services/categories-group.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'ecommerce-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  categoriesGroups!: CategoriesGroup[];
  selectedGroup!: CategoriesGroup;
  sidebarVisible = false;

  categories: MenuItem[] = [];
  navigators: MegaMenuItem[] = [];

  constructor(private categoriesGroupService: CategoriesGroupService,
              private navigationService: NavigationService,
              private router: Router) { }

  ngOnInit() {
    this.categoriesGroupService.getAll()
      .subscribe(val => {
        this.categoriesGroups = val;

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

  search(value: string) {
    if (this.selectedGroup) {
      this.router.navigate(["/products", this.selectedGroup.name], {
        queryParams: { query: value }
      });
    }
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
