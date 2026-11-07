import { Component, input, signal} from '@angular/core';
import { Product } from '../../models/product';
import {CurrencyPipe} from '@angular/common';
import localeEsCR from '@angular/common/locales/es-CR';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsCR);

@Component({
  imports: [CurrencyPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {

    product = input.required<Product>();
    showDetails = signal(false);



}
