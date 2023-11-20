import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList:undefined|product[]; 
  productMessage:undefined|string;
  
  constructor(private product:ProductService){}

   ngOnInit():void{
    this.list();
   }

   list(){
    this.product.productList().subscribe((result)=>{
      //console.warn(result);
      this.productList=result;
    })
   }

   deleteProduct(id:number){
    console.warn("test id:",id);
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMessage="Product deleted successfully";
      }
      setTimeout(()=>{
        this.productMessage=undefined
      },3000);
    });

    this.list();
   }
}
