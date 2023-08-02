import { Component } from '@angular/core';

@Component({
  selector: 'ecommerce-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  cities!: any[];
  selectedCities!: any[];

  ngOnInit() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  search(value: string) { }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
