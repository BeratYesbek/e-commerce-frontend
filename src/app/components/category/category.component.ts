import { Categroy } from './../../models/category';
import { CategoryService } from './../../services/categoryService/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

   categories :Categroy[] = []

  constructor(private categoryService :CategoryService) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe(response => {
      if(response.success){
        this.categories = response.data
      }
    })
  }

}
