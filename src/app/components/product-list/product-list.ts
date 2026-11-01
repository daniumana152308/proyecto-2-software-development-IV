import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import {Product} from '../../models/product'

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = [

      {
      id: 1,
      name: 'Razer Viper V4 Pro',
      price: 60000,
      category: 'Periféricos',
      description: 'Gaming Mouse with 95h battery duration.',
      stock: 15,
      img : 'img/mouse.webp'
    },
  {
    id: 2,
    name: 'Razer Blackshark V3 Pro',
    price: 80000,
    category: 'Headset',
    description: 'Headset for gamers, by gamers',
    stock: 5,
    img : 'img/headset.webp'

  },
  {
    id: 3,
    name: 'HyperX Alloy FPS',
    price: 35000,
    category: 'Keyboard',
    description: '60% Gaming Keyboard',
    stock: 9,
    img : 'img/keyboard.webp'

  }

  ];
}
