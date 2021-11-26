import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {
msg:string = "testmail.com"
submitted = false;
contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

  submit(form)
  {
this.contact.firstName = form.firstname;
this.contact.lastName = form.lastname;
this.contact.email = form.email;
this.contact.password = form.password;
window.alert("Cart is successfully Submitted by " + this.contact.firstName);

this.submitted =true;
  }

}
