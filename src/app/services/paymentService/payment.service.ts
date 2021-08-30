import { ResponseModel } from './../../utilities/responeModel/responseModel';
import { PaymentDto } from './../../models/Dtos/paymentDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = "https://localhost:44303/api/payments"

  constructor(private httpClient : HttpClient) { }

  add(payments : PaymentDto[]): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,payments)
  
  }
}
