import { ListResponseModel } from './../../utilities/responeModel/ListResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSummary } from 'src/app/models/cartSummary';
import { ResponseModel } from 'src/app/utilities/responeModel/responseModel';
import { CartSummaryDto } from 'src/app/models/Dtos/CartSummaryDto';

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {

  private apiUrl = "https://localhost:44303/api/cartSummaries"

  constructor(private httpClient :HttpClient) { }

  add(cartSummary : CartSummary) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,cartSummary)
  }

  delete(cartSummaryDto: CartSummaryDto) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/delete`,cartSummaryDto)
  }

  getAllCartSummaryDetailByUserId(userId:number): Observable<ListResponseModel<CartSummaryDto>>{
    return this.httpClient.get<ListResponseModel<CartSummaryDto>>(`${this.apiUrl}/getCartSummaryDetailByUserId?userId=${userId}`)
  }
}
  