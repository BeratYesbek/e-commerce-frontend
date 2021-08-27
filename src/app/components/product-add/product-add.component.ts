import { productImageDto } from '../../models/Dtos/productImageDto';
import { ProductImageService } from './../../services/productImageService/product-image.service';
import { ProductService } from './../../services/productService/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm!: FormGroup;
  productImageDto = new productImageDto()
  categoryId!: Number

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private productImageService: ProductImageService
  ) { }

  ngOnInit(): void {
    this.createProductAddForm()
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      productDescription: ["", Validators.required],
      productPrice: [0, Validators.required],
      productQuantity: [0, Validators.required],
      categoryId: [0, Validators.required],
      brandId:[0,Validators.required],
      colorId:[0,Validators.required]
    })
  }

  onSelectCategory(value: any) {
    this.categoryId = value.value
  }

  selectFiles(value: any) {


    if (value.target.files.lenght > 5) {

    } else {
      for (let i = 0; i < value.target.files.length; i++) {
        this.productImageDto.file.push(<File>value.target.files[i])
      }
    }
  }

  addProduct() {
    this.productAddForm.value.categoryId = Number(this.categoryId)

    let product = Object.assign({}, this.productAddForm.value);
    console.log(product)
    this.productService.add(product).subscribe(response => {
      var productId = Number(response.message.split(",")[1])
      this.addImage(productId)
    })
  }


  addImage(productId: number) {
    const formData = new FormData()
    formData.append("productId",productId.toString())

    for (let i = 0; i < this.productImageDto.file.length; i++) {
      formData.append("file",<File> this.productImageDto.file[i])
    }
    this.productImageService.add(formData).subscribe(response => {

    })
  }
}
