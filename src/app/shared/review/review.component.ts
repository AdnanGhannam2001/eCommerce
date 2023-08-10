import { Component, Input } from '@angular/core';
import { Review } from 'src/app/services/product.service';

@Component({
  selector: 'ecommerce-review[review]',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review!: Review;
}
