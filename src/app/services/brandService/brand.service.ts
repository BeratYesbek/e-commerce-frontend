import { Brand } from './../../models/brand';
import { ListResponseModel } from './../../utilities/responeModel/ListResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = "https://localhost:44303/api/brands"

  constructor(private HttpClient :HttpClient) { }

  getAll():Observable<ListResponseModel<Brand>>{
    return this.HttpClient.get<ListResponseModel<Brand>>(`${this.apiUrl}/getAll`)
  }
}
