import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items: Iproducts[] = [];


  constructor() { }

  addToCart (product: Iproducts){
this.items.push(product);
  }

  getItems (){
    return this.items;
  }

  clearCart (){
    this.items = [];
    return this.items;
  }

  result (){
    let total = 0;
    for(let item of this.items){
total += item.price;
console.log(total);
    }
    return total;
  }


}
