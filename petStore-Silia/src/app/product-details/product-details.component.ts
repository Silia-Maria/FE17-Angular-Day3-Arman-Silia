import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { products } from '../products';
import { Iproducts } from '../Iproducts';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartServiceService) { }

  addToCart() {
    //this addToCart is declared here 
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
    //addtoCart is method from the cart.service 
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['productId'];
      // productId is from the routing!!
      this.product = products[this.id];
    });
  }

}
