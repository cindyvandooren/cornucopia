import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/domain/product';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'ca-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // TODO: Add error handling
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
