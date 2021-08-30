import { CartSummaryDto } from './../../models/Dtos/cartSummaryDto';
import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { RouterModule } from '@angular/router';
import { CalculateProductCount } from 'src/app/utilities/setCartSummary/calculateProductCount';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  cartSummaryDto: CartSummaryDto[] = []
  totalPrice = 0
  totalPaidWithTax = 0
  constructor(
    private eventEmitterService: EventEmitterService,
    private calculateProductCount : CalculateProductCount
    ) { }

  ngOnInit(): void {
  
    if (this.eventEmitterService.subsCartSummary == undefined) {
      
      this.eventEmitterService.subsCartSummary = this.eventEmitterService.invokeCartSummary.subscribe(response => {
        this.cartSummaryDto = response
        this.calculateTotalPrice()
      })
    }else{
      this.cartSummaryDto = this.calculateProductCount.getCalculatedProduct()
    }

  }

  calculateTotalPrice() {
    for (let index = 0; index < this.cartSummaryDto.length; index++) {
      this.totalPrice = this.totalPrice + (this.cartSummaryDto[index].product.productPrice * this.cartSummaryDto[index].count)
    }
    this.totalPaidWithTax = this.totalPrice + (this.totalPrice * 18 / 100)
  }

}
