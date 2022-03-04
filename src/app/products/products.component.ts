import { Component, OnInit } from '@angular/core';
import { ICategory } from '../sharedclassesandtypes/ICategory';
import { DiscountOffers } from '../sharedclassesandtypes/discountoffers';
import { IProduct } from '../sharedclassesandtypes/iproduct';
import { ProductServiceService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount:any  = DiscountOffers[1];
  storeName: string;
  storeLogo: string;
  public ProductList: IProduct[];
  CategoryList: Array<ICategory>;
  ClientName: string;
  IsPurshased: boolean;
  getproductlistbyid: any;

  constructor(private ProductService:ProductServiceService) {


    this.storeName= "Infinity Stores";
    this.storeLogo = "assets/logo.png ";
    this.ProductList= [{
    ID: 1, Name: "labtop", Quantity: 5, Price: 20, Img: "assets/microsoft surface.jpg"
    }];
    this.IsPurshased = false;
    this.ClientName = "";
    this.CategoryList =[
      { ID: 1, Name: 'moblies' },
      { ID: 2, Name: 'labtops' },
      { ID: 3, Name: 'electrices' }
      ];
  }


  ngOnInit(): void {
    
    this.getproductlistbyid= this.ProductService.GetProductById(2);
  }

  renderValues(){
    this.ProductList = this.ProductService.GetAllProducts();
    return this.ProductList;
   } 
   
   
  check: boolean = true;
  Discountcheck() {
    if (this.Discount == 'NoDiscount') {
      this.check = true;
    }
    else {
      this.check = false;
    }
    return this.check;
  }
  checkIsPurshased(){
    if (this.IsPurshased == true){
      this.IsPurshased = false;
    }
    else{
      this.IsPurshased = true;
    }
  }

}