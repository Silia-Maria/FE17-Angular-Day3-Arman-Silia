import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {
  total: number = this.cartService.result();

info = new FormGroup({
firstName: new FormControl("",[Validators.required, Validators.minLength(3)]),
lastName: new FormControl("", Validators.required),
country: new FormControl("",Validators.required),
adress: new FormControl("", Validators.required),
houseNumber: new FormControl("", Validators.required),
zip: new FormControl("", Validators.required),
city: new FormControl("",Validators.required),
state: new FormControl("",Validators.required),
email: new FormControl("", [Validators.required, Validators.email]),
areaCode: new FormControl("",Validators.required),
number: new FormControl (""),

cardName: new FormControl("",Validators.required),
cardNumber: new FormControl("",Validators.required),
expDate: new FormControl("",Validators.required),
cvc: new FormControl("",Validators.required)

  })

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
  }
 onSubmit(){
    if(this.info.valid){
      console.log(this.info.value);
   }else{
    console.log("invalid")
   }
}

orderSent() {
  window.alert("Your Order was successfull!");
  this.info.reset();
  this.total = 0;
}

 
}
