import { CartSummaryDto } from './../models/Dtos/cartSummaryDto';
import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeProductDetailComponentFunction = new EventEmitter()    
  invokeCartSummary = new EventEmitter()
  subsVar?: Subscription   
  subsCartSummary?: Subscription
  cartSummaryDto : CartSummaryDto[] =[]
  constructor() { }    
   
  onInvokeSetCartSummary(cartSummaryDto : CartSummaryDto[]){
    this.cartSummaryDto = cartSummaryDto
    this.onInvokeGetCartSummary()
  }
  onInvokeGetCartSummary(){
    this.invokeCartSummary.emit(this.cartSummaryDto)
  

  }
  oninvokeProductDetailComponentAddToCartButtonClick() {    
    this.invokeProductDetailComponentFunction.emit();    
  }    
} 