import { Comment } from './../comment';
export interface ProductDto {
    productId : number,
    productDescription : string,
    productName : string,
    productPrice : number,
    productQuantity : number,
    categoryId : number,
    categoryName : string,
    brandName : string,
    brandId :string,
    brandLogo :string,
    colorCode :string,
    colorName :string,
    colorId :number,
    images : string[]
    comments : Comment[]
}