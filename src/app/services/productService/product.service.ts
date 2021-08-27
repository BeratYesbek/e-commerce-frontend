import { SingleResponseModel } from './../../utilities/responeModel/singleResponseModel';
import { ProductDto } from './../../models/Dtos/ProductDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ListResponseModel } from 'src/app/utilities/responeModel/ListResponseModel';
import { ResponseModel } from 'src/app/utilities/responeModel/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "https://localhost:44303/api/products"

  constructor(private httpClient : HttpClient) { }

  add(product : Product) :  Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,product)
  }

  getAll() : Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(`${this.apiUrl}/getAll`)
  }

  getAllProductDetail(): Observable<ListResponseModel<ProductDto>> {
    return this.httpClient.get<ListResponseModel<ProductDto>>(`${this.apiUrl}/getAllProductDetail`)
  }

  getProductDetailById(id :number): Observable<SingleResponseModel<ProductDto>>{
    return this.httpClient.get<SingleResponseModel<ProductDto>>(`${this.apiUrl}/getProductDetailById?id=${id}`)
  }
}
