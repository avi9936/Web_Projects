import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-sellar-update-product',
  templateUrl: './sellar-update-product.component.html',
  styleUrls: ['./sellar-update-product.component.css']
})
export class SellarUpdateProductComponent {
  productData:undefined|product; 
  productMessage:undefined|string;
  
  constructor(private route:ActivatedRoute,private product:ProductService,private router:Router){}
  
  ngOnInit():void{
    let productId=this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((data)=>{
        this.productData=data;
    })
  }

  updateProduct(data:product){
    if(this.productData){
      data.id=this.productData.id;
    }
     this.product.updateProduct(data).subscribe((result)=>{
       if(result){
        this.productMessage="Product details updated";
       }
     });
     setTimeout(()=>{
      this.productMessage=undefined,this.router.navigate(['/seller-home']);
     },3000);
     
  }
}
