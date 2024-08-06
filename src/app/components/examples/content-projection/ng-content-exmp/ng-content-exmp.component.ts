import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { HeaderComponent } from '../header/header.component';
import { DetailsComponent } from '../details/details.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'app-ng-content-exmp',
  templateUrl: './ng-content-exmp.component.html',
  styleUrls: ['./ng-content-exmp.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    HeaderComponent,
    DetailsComponent,
    FooterComponent    
  ],
})
export class NgContentExmpComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductListComponent) productListCom: ProductListComponent;
  displayStr;
  constructor() {}

  ngOnInit() {
    this.displayStr = this.productListCom;
   
  }

  ngAfterViewInit() {
    console.log('product list >>> ', this.productListCom);
  }
}
