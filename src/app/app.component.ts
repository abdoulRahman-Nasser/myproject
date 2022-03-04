import { ProductsComponent } from './products/products.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myproject';
  productlist:any;
  @ViewChild(ProductsComponent)child?: ProductsComponent ;
  ngAfterViewInit(): void {
    //console.log(this.child.renderValues());
    this.productlist=this.child?.renderValues();
  }

}
 
