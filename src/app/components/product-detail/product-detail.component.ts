import { CartSummaryService } from './../../services/cartSummaryService/cart-summary.service';
import { ProductDto } from './../../models/Dtos/ProductDto';
import { ProductService } from './../../services/productService/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxImgZoomService } from "ngx-img-zoom";
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartSummary } from 'src/app/models/cartSummary';

declare function imageZoom(x: any, y: any): void

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  rating = 0
  productDto! :ProductDto
  constructor(
    private activatedRoute : ActivatedRoute,
    private productService: ProductService,
    private cartSummaryService : CartSummaryService,
    private config: NgbRatingConfig 
    ) {
      config.max = 5;
      config.readonly = true;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["productId"]){
        this.getProductDetailById(params["productId"])
      }
    })
  }

  getProductDetailById(id: number) {
    this.productService.getProductDetailById(id).subscribe(response => {
        if(response.success){
          this.productDto = response.data
          this.calculateProductRating()
        }
    });
  }

  calculateProductRating(){
    var total = 0
    for (let index = 0; index < this.productDto.comments.length; index++) {
      total = total + this.productDto.comments[index].rating     
    }
    this.rating = (total/this.productDto.comments.length)
  }

  addToCart(){

    var cartSummary = new CartSummary()
    cartSummary.productId = this.productDto.productId
    cartSummary.userId = 1

    this.cartSummaryService.add(cartSummary).subscribe(response => {
      if(response.success){
        console.log(response.success)
      }
    });
  }

}

