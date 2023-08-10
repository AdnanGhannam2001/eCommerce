import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/services/cart.service';

@Component({
  selector: '[ecommerce-cart-item][item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: CartItem;
}
