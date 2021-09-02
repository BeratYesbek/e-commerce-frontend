import { User } from './../../models/user';
import { EventEmitterService } from './../../services/event-emitter.service';
import { CartSummaryService } from './../../services/cartSummaryService/cart-summary.service';
import { Component, OnInit } from '@angular/core';
import { CartSummaryDto } from 'src/app/models/Dtos/cartSummaryDto';
import { Router } from '@angular/router';
import { CalculateProductCount } from 'src/app/utilities/setCartSummary/calculateProductCount';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartSummaryDtos: CartSummaryDto[] = []
  currentUser?: User
  constructor(
    private cartSummaryService: CartSummaryService,
    private eventEmitterService: EventEmitterService,
    private calculateProductCount : CalculateProductCount,
  ) { }

  ngOnInit(): void {
    this.getAllCartSummaryByUserId()

    if (this.eventEmitterService.subsVar == undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.invokeProductDetailComponentFunction
        .subscribe(response => {
          this.getAllCartSummaryByUserId()
        })
    }
  }

  getAllCartSummaryByUserId() {
    
    let userId = Number(localStorage.getItem("userId"))
    this.cartSummaryService.getAllCartSummaryDetailByUserId(userId).subscribe(response => {
      if (response.success) {
        this.cartSummaryDtos = this.calculateProductCount.calculateProductCount(response.data)
        this.invokeCartSummary()
      }
    })
  }

  removeToCart(cartSummary: CartSummaryDto) {
    this.cartSummaryService.delete(cartSummary).subscribe(response => {
      if (response.success) {
        this.getAllCartSummaryByUserId()
      }
    })
  }



  invokeCartSummary(){
    this.eventEmitterService.onInvokeSetCartSummary(this.cartSummaryDtos)
  }

}
