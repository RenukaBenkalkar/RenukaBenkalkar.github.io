import { Injectable } from '@angular/core';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /*create empty array products */
  products : Product[]= [];

  constructor() { }

  addProductstoCart(product)
  {
    this.products.push(product);
  }
  getProducts()
  { 
    return this.products;
  }
  clearCart()
  {
    this.products =[];
  }
}
