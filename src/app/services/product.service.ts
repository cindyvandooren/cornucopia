import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../domain/product';

@Injectable()
export class ProductService {
  // TODO: Move to development proxy config
  private static baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${ProductService.baseUrl}/products`);
  }
}
