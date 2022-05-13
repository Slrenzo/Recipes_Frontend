import { Component, OnInit } from '@angular/core';
import { IngredientCardsService } from "../../services/ingredient-card.service";
import { Observable } from "rxjs";
import {Category, IngredientCard} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-ingredient-card-list',
  templateUrl: './ingredient-card-list.component.html',
  styleUrls: ['./ingredient-card-list.component.scss']
})
export class IngredientCardListComponent implements OnInit {

  ingredientCards$!: Observable<IngredientCard[]>;
  categories$!: Observable<Category[]>;

  categorySelected!: string;
  constructor(private ingredientCardsService: IngredientCardsService) {  }

  ngOnInit(): void {
    this.ingredientCards$ = this.ingredientCardsService.getIngredientsByParameter(this.categorySelected);
    this.categories$ = this.ingredientCardsService.getCategory();
  }

  onCategorySelected($event: any) {
    this.ingredientCards$ = this.ingredientCardsService.getIngredientsByParameter(this.categorySelected);
  }
}
