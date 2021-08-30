import { CartSummaryDto } from './../../models/Dtos/cartSummaryDto';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root',
})
export class CalculateProductCount {

    private cartSummaryDtos: CartSummaryDto[] = []

    calculateProductCount(cartSummaryDto: CartSummaryDto[]): CartSummaryDto[] {
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
        return this.cartSummaryDtos
    }

    getCalculatedProduct() : CartSummaryDto[]{
        return this.cartSummaryDtos
    }
}