import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { cart, priceSummary } from '../data-type';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cartData: cart[] | undefined;
  priceSummary: priceSummary = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  }

  constructor(private router: Router, private product: ProductService) {

  }

  loadCart(){
    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity);
        }
      })
      this.priceSummary.price = price;
      this.priceSummary.discount = price * 0.1;
      this.priceSummary.tax = price * 0.05;
      this.priceSummary.delivery = 100;
      this.priceSummary.total = price - (price * 0.1) + (price * 0.05) + 100;
      if(!this.cartData.length){
        this.router.navigate(['/'])
      }
    })
  }

  ngOnInit(): void {
    this.loadCart();
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  removeToCart(cartId: number | undefined) {
    cartId && this.product.removeToCart(cartId).subscribe((result) => {
      if (result) {
        this.loadCart();
      }
    })
  }
}
