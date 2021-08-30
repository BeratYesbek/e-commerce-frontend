import { PaymentService } from './../../services/paymentService/payment.service';
import { PaymentDto } from './../../models/Dtos/paymentDto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculateProductCount } from 'src/app/utilities/setCartSummary/calculateProductCount';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { CartSummaryDto } from './../../models/Dtos/cartSummaryDto';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentFromGroup!: FormGroup
  paymentDto : PaymentDto[] = []
  cartSummaryDto: CartSummaryDto[] = []
  totalPrice = 0
  totalPayWithTax = 0
  constructor(
    private eventEmitterService: EventEmitterService,
    private calculateProductCount: CalculateProductCount,
    private formBuilder :FormBuilder,
    private paymentService : PaymentService
  ) { }

  createPaymentFromGroup(){
    this.paymentFromGroup = this.formBuilder.group({
     email: ["",Validators.required],
     phoneNumber: ["",Validators.required],
     address: ["",Validators.required],
     cardNumber: ["",Validators.required],
     expiryDate: ["",Validators.required],
     cvv: ["",Validators.required],
     cardHolderName: ["",Validators.required]

    })
  }

  placeOrder(){
      let paymentDto = new PaymentDto() 
      if(this.paymentFromGroup.valid){
        for (let index = 0; index < this.cartSummaryDto.length; index++) {
          paymentDto.email = this.paymentFromGroup.get("email")?.value
          paymentDto.address = this.paymentFromGroup.get("address")?.value
          paymentDto.phoneNumber = this.paymentFromGroup.get("phoneNumber")?.value
          paymentDto.cardNumber = this.paymentFromGroup.get("cardNumber")?.value
          paymentDto.expiryDate = this.paymentFromGroup.get("expiryDate")?.value,
          paymentDto.cardHolderName = this.paymentFromGroup.get("cardHolderName")?.value
          paymentDto.cvv = this.paymentFromGroup.get("cvv")?.value
          paymentDto.date = new Date()      
          paymentDto.totalPrice = (this.cartSummaryDto[index].product.productPrice +     this.cartSummaryDto[index].product.productPrice*18/100)
          paymentDto.userId = 1
          paymentDto.cartSummaryId = this.cartSummaryDto[index].id
          paymentDto.productId = this.cartSummaryDto[index].productId
          this.paymentDto.push(paymentDto)
        }
        this.paymentService.add(this.paymentDto).subscribe(response => {
          if(!response.success){

          }else{
            
          }
        });
        

      }
  }

  ngOnInit(): void {
    this.createPaymentFromGroup()
    if (this.eventEmitterService.subsCartSummary == undefined) {
      this.eventEmitterService.subsCartSummary = this.eventEmitterService.invokeCartSummary.subscribe(response => {
        this.cartSummaryDto = response
        this.calculateTotalPrice()
      })

    } else {
      this.cartSummaryDto = this.calculateProductCount.getCalculatedProduct()
      this.calculateTotalPrice()
    }


  }

  calculateTotalPrice() {
    for (let index = 0; index < this.cartSummaryDto.length; index++) {
      this.totalPrice = this.totalPrice + (this.cartSummaryDto[index].product.productPrice * this.cartSummaryDto[index].count)
    }
    this.totalPayWithTax = this.totalPrice + (this.totalPrice * 18 / 100)
  }


}
