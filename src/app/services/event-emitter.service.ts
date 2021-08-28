import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeProductDetailComponentFunction = new EventEmitter();    
  subsVar?: Subscription;    
    
  constructor() { }    
    
  oninvokeProductDetailComponentAddToCartButtonClick() {    
    this.invokeProductDetailComponentFunction.emit();    
  }    
} 