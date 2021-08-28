import { EventEmitterService } from './../../services/event-emitter.service';
import { CartSummaryService } from './../../services/cartSummaryService/cart-summary.service';
import { Component, OnInit } from '@angular/core';
import { CartSummaryDto } from 'src/app/models/Dtos/CartSummaryDto';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartSummaryDtos: CartSummaryDto[] = []

  constructor(
    private cartSummaryService: CartSummaryService,
    private eventEmitterService: EventEmitterService
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
    this.cartSummaryService.getAllCartSummaryDetailByUserId(1).subscribe(response => {
      if (response.success) {
        this.calculateProductCount(response.data)
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


  calculateProductCount(cartSummaryDto: CartSummaryDto[]) {
    this.cartSummaryDtos = []
    for (let index = 0; index < cartSummaryDto.length; index++) {
      if (index == 0) {
        let count: number = cartSummaryDto.filter(e => e.productId == cartSummaryDto[index].productId).length
        // let price : number = cartSummaryDto[index].product.productPrice
        cartSummaryDto[index].count = count
        // cartSummaryDto[index].product.productPrice = count*price
        this.cartSummaryDtos.push(cartSummaryDto[index])
      }
      else {
        if (this.cartSummaryDtos.filter(e => e.productId == cartSummaryDto[index].productId).length == 0) {
          cartSummaryDto[index].count = cartSummaryDto.filter(e => e.productId == cartSummaryDto[index].productId).length
          this.cartSummaryDtos.push(cartSummaryDto[index])
        }
      }
    }
  }


}
