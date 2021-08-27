import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/utilities/responeModel/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  private apiUrl = "https://localhost:44303/api/productImages"

  constructor(private httpClient : HttpClient) { }

  add(formData: FormData) : Observable<ResponseModel>{
    console.log(formData)
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,formData)
  }
}
