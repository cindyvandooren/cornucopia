import {Component, Input} from '@angular/core';
import {Product} from 'src/app/domain/product';

@Component({
  selector: 'ca-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;

  constructor() { }
}
