import { CartSummaryDto } from './../models/Dtos/cartSummaryDto';
import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeProductDetailComponentFunction = new EventEmitter()    
  invokeNavComponentCurrentUser = new EventEmitter()
  invokeCartSummary = new EventEmitter()
  subsVar?: Subscription   
  subsCartSummary?: Subscription
  subsNavComp? : Subscription
  cartSummaryDto : CartSummaryDto[] =[]
  constructor() { }    
   
  onInvokeSetCartSummary(cartSummaryDto : CartSummaryDto[]){
    this.cartSummaryDto = cartSummaryDto
    this.onInvokeGetCartSummary()
  }
  onInvokeGetCartSummary(){
    this.invokeCartSummary.emit(this.cartSummaryDto)
  }
  onInvokeNavComponentCurrentUser(){
    this.invokeNavComponentCurrentUser.emit();
  }
  oninvokeProductDetailComponentAddToCartButtonClick() {    
    this.invokeProductDetailComponentFunction.emit();    
  }    
} 