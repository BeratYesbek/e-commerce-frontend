export class PaymentDto{
    paymentId? : number
    address? : string
    cardNumber? : string
    cardHolderName? : string
    expiryDate? : string
    email? : string
    phoneNumber? : string
    cvv?:number
    userId? :number
    productId?:number
    totalPrice?:number
    cartSummaryId?:number
    date?: Date
}