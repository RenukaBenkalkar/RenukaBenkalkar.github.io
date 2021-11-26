import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {Input} from '@angular/core';
import {Product} from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {

 @Input() product : Product;
 @Output() notify = new EventEmitter<Product>();
 @Input() isUnchanged;
/** TS7008: Member 'isUnchanged' implicitly has an 'any' type.
*/ 
  constructor() { }

  ngOnInit(): void {
  }
clickChildMe()
{
  this.notify.emit(this.product);
}
  
 
}
