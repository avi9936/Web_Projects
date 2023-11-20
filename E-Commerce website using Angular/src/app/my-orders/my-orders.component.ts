import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { order } from '../data-type';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orderData:order[]|undefined

  constructor(private product:ProductService){}

  getOrderList(){
    this.product.orderList().subscribe((result)=>{
      this.orderData=result
   })
  }

  ngOnInit():void{
    this.product.orderList().subscribe((result)=>{
      this.orderData=result
   })
  }

  cancelOrder(orderId:number|undefined){
    if(orderId){
      this.product.cancelOrder(orderId).subscribe((result)=>{
          this.getOrderList();
      })
    }
  }

}
