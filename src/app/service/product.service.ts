import { Injectable } from '@angular/core';
import { IProduct } from '../sharedclassesandtypes/iproduct';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  
  productList =
    [
      { ID: 1, Name: 'Samsung', Quantity: 2, Price: 150, Img: '' },
      { ID: 2, Name: 'Hawawi', Quantity: 3, Price: 1000, Img: '' },
      { ID: 3, Name: 'Microsoft', Quantity: 1, Price: 200, Img: '' },
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