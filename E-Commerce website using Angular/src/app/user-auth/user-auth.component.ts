import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Login, SignUp, cart, product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
   selector: 'app-user-auth',
   templateUrl: './user-auth.component.html',
   styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
   constructor(private user: UserService, private router: Router, private product: ProductService) { }
   showLogin = false;
   authError: string = '';

   ngOnInit(): void {
      this.user.userAuthReload();
   }

   signUp(data: SignUp): void {
      this.user.userSignUp(data)
   }

   login(data: Login): void {
      this.user.userLogin(data)
      this.user.invalidUserAuth.subscribe((result) => {
         //console.warn(result);
         if (result) {
            this.authError = "User not found"
         } else {
            this.localCartToRemoteCart();
         }
      })
   }

   openLogin() {
      this.showLogin = true;
   }

   openSignup() {
      this.showLogin = false;
   }

   localCartToRemoteCart() {
      let data = localStorage.getItem('localCart');
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      
      if (data) {
         let cartDataList: product[] = JSON.parse(data)

         cartDataList.forEach((product: product, index) => {
            let cartData: cart = {
               ...product,
               productId: product.id,
               userId
            };

            delete cartData.id;
            setTimeout(() => {
               this.product.addToCart(cartData).subscribe((result) => {
                  if (result) {
                     console.warn("item stored in DB")
                  }
               })
            }, 500);
            if (cartDataList.length === index + 1) {
               localStorage.removeItem('localCart');
            }
         })
      }

      setTimeout(()=>{
         this.product.getCartList(userId);
      },2000);
   }
}
