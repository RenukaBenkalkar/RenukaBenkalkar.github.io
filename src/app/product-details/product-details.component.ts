import { Component, OnInit } from '@angular/core';
import { products } from 'src/data/products';
import {Product} from 'src/product'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title : string = "Renuka Benkalkar Project"; 
  products : Product[] = products;
isUnchanged = true;

  constructor() { }

  ngOnInit(): void {
  }
  clickMe(product:Product){
    window.alert(product.name +"course video are available in your location to purchase");
  }

  enableBuying()
  {
    this.isUnchanged = !this.isUnchanged;
  }

  
}
