import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartSummary } from 'src/app/models/cartSummary';
import { ResponseModel } from 'src/app/utilities/responeModel/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CartSummaryService {

  private apiUrl = "https://localhost:44303/api/cartSummaries"

  constructor(private httpClient :HttpClient) { }

  add(cartSummary : CartSummary) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,cartSummary)
  }
}
  