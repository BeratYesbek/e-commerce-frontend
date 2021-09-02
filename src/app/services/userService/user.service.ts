import { User } from './../../models/user';
import { SingleResponseModel } from './../../utilities/responeModel/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "https://localhost:44303/api/users"

  constructor(private httpClient: HttpClient) { }

  getUserById(userId :number):Observable<SingleResponseModel<User>>{
    return this.httpClient.get<SingleResponseModel<User>>(`${this.apiUrl}/getById?userId=${userId}`)
  }
}
