import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellarUpdateProductComponent } from './sellar-update-product/sellar-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate: [authGuard]
  },
  {
    path:'seller-add-product',
    component:SellerAddProductComponent,
    canActivate: [authGuard]
  },
  {
    path:'seller-update-product/:id',
    component:SellarUpdateProductComponent,
    canActivate: [authGuard]
  },
  {
    path:'search/:query',
    component:SearchComponent
  },
  {
    path:'details/:productId',
    component: ProductDetailsComponent
  },
  {
    path:'user-auth',
    component: UserAuthComponent
  },
  {
    path:'cart-page',
    component:CartPageComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'my-orders',
    component:MyOrdersComponent
  },
  //always keep route for 404 page at the end
  {
    path:'**', pathMatch:'full',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
