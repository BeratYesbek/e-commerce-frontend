import { Brand } from '../brand';
import { Product } from '../product';
import { Categroy } from '../category';
import { Color } from '../color';
export interface CartSummaryDto{
    id : number
    productId: number
    userId: number
    count: number 
    category : Categroy
    product :Product
    brand : Brand
    color :Color
    images : string[]
}