import { Categroy } from './../../models/category';
import { ListResponseModel } from 'src/app/utilities/responeModel/ListResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = "https://localhost:44303/api/categories"

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<ListResponseModel<Categroy>>{
    return this.httpClient.get<ListResponseModel<Categroy>>(`${this.apiUrl}/getAll`)
  }

  
}
