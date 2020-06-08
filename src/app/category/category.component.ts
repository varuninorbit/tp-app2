import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category-service';
import { ICategorie } from '../types/icategory';
import { SelectedOptionsService } from '../selected-options.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: ICategorie[];

  selectedCategory:string[]=[];

  constructor(private categoyService: CategoryService, 
    private selectedOptions: SelectedOptionsService) { }

  ngOnInit() {
    this.categoyService.getData().subscribe((data)=>{
      this.categories = data;
    });
  }

  updateCategory(){
    let selectedOptions = this.selectedOptions.selected;
    selectedOptions.category= Object.keys(this.selectedCategory);
    this.selectedOptions.updateSelectedOptions(selectedOptions)
  }

}


