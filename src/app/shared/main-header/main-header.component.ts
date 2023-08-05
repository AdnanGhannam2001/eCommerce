import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { CategoriesGroupService } from 'src/app/services/categories-group.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'ecommerce-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  cities!: any[];
  selectedCities!: any[];
  sidebarVisible = false;

  categories: MenuItem[] = [];
  navigators: MegaMenuItem[] = [];

  constructor(private categoriesGroupService: CategoriesGroupService,
              private navigationService: NavigationService) { }

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
    
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

  search(value: string) { }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
