import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brandService/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = []
  constructor(private brandService :BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }
  
  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data
    })
  }

}