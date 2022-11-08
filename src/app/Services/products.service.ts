import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Samsung phone',
      price: 10000,
      inventory: 1000,
      minimum_stock: 10,
      category: 'Phones',
    },
    {
      id: 2,
      name: 'Yamaha Guitar',
      price: 10000,
      inventory: 200000,
      minimum_stock: 10,
      category: 'electronics',
    },
    {
      id: 3,
      name: 'Soft Pillowcases',
      price: 2000,
      inventory: 200,
      minimum_stock: 20,
      category: 'Bedding',
    },
    {
      id: 4,
      name: 'Counter Book',
      price: 100,
      inventory: 250,
      minimum_stock: 100,
      category: 'Stationery',
    },
    {
      id: 5,
      name: 'The witcher 3',
      price: 6000,
      inventory: 100,
      minimum_stock: 20,
      category: 'Games',
    },
    {
      id: 6,
      name: 'Macbook Pro 16 inch',
      price: 180000,
      inventory: 200,
      minimum_stock: 100,
      category: 'Electronics',
    },
    {
      id: 7,
      name: 'Coffee table',
      price: 20000,
      inventory: 200,
      minimum_stock: 200,
      category: 'Furniture',
    },
    {
      id: 8,
      name: 'Gta 5',
      price: 6000,
      inventory: 100,
      minimum_stock: 20,
      category: 'Games',
    },
    {
      id: 9,
      name: 'Mercedes',
      price: 2500000,
      inventory: 10,
      minimum_stock: 40,
      category: 'car',
    },
  ];

  constructor() {}

  onShowDetails = new EventEmitter<{
    name: string;
    price: number;
    inventory: number;
    minimum_stock: number;
    category: string;
  }>();
  showProductDetails(product: {
    name: string;
    price: number;
    inventory: number;
    minimum_stock: number;
    category: string;
  }) {
    this.onShowDetails.emit(product);
  }
}
