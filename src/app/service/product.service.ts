import { Injectable } from '@angular/core';
import { IProduct } from '../sharedclassesandtypes/iproduct';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  
  productList =
    [
      { ID: 1, Name: 'Samsung', Quantity: 1, Price: 1500, Img: 'assets/galaxy a12.jpg' },
      { ID: 2, Name: 'xiaomi', Quantity: 1, Price: 1000, Img: 'assets/microsoft surface .jpg' },
      { ID: 3, Name: 'Microsoft', Quantity: 1, Price: 2000, Img: 'assets/xiaomi 11 lite.jpg' },
      { ID: 3, Name: 'apple', Quantity: 1, Price: 20000, Img: 'assets/iphone 12 pro max.jpg' },
    ]
  productlistbyID={}
  constructor() {
    
  }

  GetAllProducts() {
    return this.productList;
  }

  GetProductById($id:any){
    if ( typeof $id == 'number'){
      this.productList.forEach((e)=>{
        if (e.ID===$id){
          this.productlistbyID=e;
        }
      })
      return this.productlistbyID;
    }else return null;
    
  }
}