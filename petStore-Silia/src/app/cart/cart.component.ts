import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Iproducts } from '../Iproducts';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<Iproducts> = [];
  total: number = this.cartService.result();
  

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();  
  }

 

}
