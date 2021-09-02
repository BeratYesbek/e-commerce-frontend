import { SingleResponseModel } from './../../utilities/responeModel/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from 'src/app/models/signUp';
import { TokenModel } from 'src/app/models/tokenModel';
import { SignIn } from 'src/app/models/signIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "https://localhost:44303/api/auth"

  constructor(private httpClient : HttpClient) { }
  signIn(signIn : SignIn) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/login`,signIn)

  }
  signUp(signUp : SignUp ) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(`${this.apiUrl}/register`,signUp)
  }

  isAuthenticated() : boolean{
    if(localStorage.getItem("token") && localStorage.getItem("userId")){
      return true 
    }
    return false
  }
}

