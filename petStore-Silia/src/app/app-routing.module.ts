import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SubmitformComponent } from './submitform/submitform.component';

const routes: Routes = [{
  path: "", component: ProductListComponent,
},
{
  path: "details/:productId", component: ProductDetailsComponent,
},
{
path: "cart", component: CartComponent,
},
{
  path: "submitform", component: SubmitformComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
