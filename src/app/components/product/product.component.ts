import { ProductService } from './../../services/productService/product.service';
import { ProductDto } from '../../models/Dtos/productDto';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  page = 1
  pageSize = 10
  productsDto: ProductDto[] = []
  rating: number[] = []

  constructor(private productService: ProductService,
    config: NgbRatingConfig,
    private activatedRoute: ActivatedRoute
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productsDto = []
      this.rating = []
      if (params["categoryId"]) {

        this.getAllProductByCategoryId(params["categoryId"])
      } else {
        this.getAllProductsDto()
      }
    })
  }

  getAllProductByCategoryId(categoryId: number) {
    this.productService.getAllProductDetailByCategoryId(categoryId).subscribe(response => {
      if (response.success) {
        this.productsDto = response.data
        this.calculateProductRating()

      }
    });
  }
  getAllProductsDto() {
    this.productService.getAllProductDetail().subscribe(response => {
      if (response.success) {
        this.productsDto = response.data
        this.calculateProductRating()
      }
    })
  }
  calculateProductRating() {
    var total = 0

    for (let i = 0; i < this.productsDto.length; i++) {
      for (let j = 0; j < this.productsDto[i].comments.length; j++) {
        total = total + this.productsDto[i].comments[j].rating
      }
      this.rating.push((total / this.productsDto[i].comments.length))
      total = 0

    }
  }


}
