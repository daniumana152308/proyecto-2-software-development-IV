import { Component, input, signal} from '@angular/core';
import { Product } from '../../models/product';


@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {

    product = input.required<Product>();
    showDetails = signal(false);



}
