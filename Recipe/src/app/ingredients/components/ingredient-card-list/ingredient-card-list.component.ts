import { Component, OnInit } from '@angular/core';
import { IngredientCardsService } from "../../services/ingredient-card.service";
import { Observable } from "rxjs";
import {Category, IngredientResponse} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-ingredient-card-list',
  templateUrl: './ingredient-card-list.component.html',
  styleUrls: ['./ingredient-card-list.component.scss']
})
export class IngredientCardListComponent implements OnInit {

  ingredientCards$!: Observable<IngredientResponse[]>;
  categories$!: Observable<Category[]>;
  categorySelected!: string;
  nameSelected!: string;

  constructor(private ingredientCardsService: IngredientCardsService) {  }

  onChange() {
    this.ingredientCards$ = this.ingredientCardsService
      .getIngredientsByParameter(this.categorySelected, this.nameSelected);
  }

  ngOnInit(): void {
    this.ingredientCards$ = this.ingredientCardsService
      .getIngredientsByParameter(this.categorySelected, this.nameSelected);
    this.categories$ = this.ingredientCardsService.getCategory();
  }
}
