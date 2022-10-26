import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      name: 'Samsung phone',
      price: 10000,
      inventory: 1000,
      minimum_stock: 10,
      category: 'Phones',
    },
    {
      name: 'Yamaha Guitar',
      price: 10000,
      inventory: 200000,
      minimum_stock: 10,
      category: 'electronics',
    },
    {
      name: 'Soft Pillowcases',
      price: 2000,
      inventory: 200,
      minimum_stock: 20,
      category: 'Bedding',
    },
    {
      name: 'Counter Book',
      price: 100,
      inventory: 250,
      minimum_stock: 100,
      category: 'Stationery',
    },
    {
      name: 'The witcher 3',
      price: 6000,
      inventory: 100,
      minimum_stock: 20,
      category: 'Games',
    },
    {
      name: 'Macbook Pro 16 inch',
      price: 180000,
      inventory: 200,
      minimum_stock: 100,
      category: 'Electronics',
    },
    {
      name: 'Coffee table',
      price: 20000,
      inventory: 200,
      minimum_stock: 200,
      category: 'Furniture',
    },
    {
      name: 'Gta 5',
      price: 6000,
      inventory: 100,
      minimum_stock: 20,
      category: 'Games',
    },
    {
      name: 'Mercedes',
      price: 2500000,
      inventory: 10,
      minimum_stock: 40,
      category: 'car',
    },
  ];

  constructor() {}
}
