import { Component } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'ecommerce-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: CartItem[] = [];

  countries: any[] = [];
  selectedCity: any;
    
  zip?: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getAll("1")
      .subscribe(val => {
        this.cart = val;
      });
    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' }
            ]
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' }
            ]
          }
      ]
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Quebec',
          cities: [
            { cname: 'Montreal', code: 'C-MO' },
            { cname: 'Quebec City', code: 'C-QU' }
          ]
        },
        {
          name: 'Ontario',
          cities: [
            { cname: 'Ottawa', code: 'C-OT' },
            { cname: 'Toronto', code: 'C-TO' }
          ]
        }
      ]
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          cities: [
            { cname: 'Los Angeles', code: 'US-LA' },
            { cname: 'San Diego', code: 'US-SD' },
            { cname: 'San Francisco', code: 'US-SF' }
          ]
        },
        {
          name: 'Florida',
          cities: [
            { cname: 'Jacksonville', code: 'US-JA' },
            { cname: 'Miami', code: 'US-MI' },
            { cname: 'Tampa', code: 'US-TA' },
            { cname: 'Orlando', code: 'US-OR' }
          ]
        },
        {
          name: 'Texas',
          cities: [
            { cname: 'Austin', code: 'US-AU' },
            { cname: 'Dallas', code: 'US-DA' },
            { cname: 'Houston', code: 'US-HO' }
          ]
        }
      ]
    }];
  }
}
