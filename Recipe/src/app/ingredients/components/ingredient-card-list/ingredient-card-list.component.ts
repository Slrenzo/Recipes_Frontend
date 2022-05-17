import { Component, OnInit } from '@angular/core';
import { IngredientCardsService } from "../../services/ingredient-card.service";
import { Observable } from "rxjs";
import {Category, IngredientCard} from "../../models/ingredient-card.model";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddIngredientComponent} from "../dialog-add-ingredient/dialog-add-ingredient.component";

@Component({
  selector: 'app-ingredient-card-list',
  templateUrl: './ingredient-card-list.component.html',
  styleUrls: ['./ingredient-card-list.component.scss']
})
export class IngredientCardListComponent implements OnInit {

  ingredientCards$!: Observable<IngredientCard[]>;
  categories$!: Observable<Category[]>;
  categorySelected!: string;
  category!: string;
  name!: string;

  constructor(private dialog: MatDialog,
              private ingredientCardsService: IngredientCardsService) {  }

  onCategorySelected() {
    this.ingredientCards$ = this.ingredientCardsService.getIngredientsByParameter(this.categorySelected);
  }

  openDialog(): void {
    this.dialog.open(DialogAddIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data : {
        name: this.name,
        category: this.category,
      }
    });
  }

  ngOnInit(): void {
    this.ingredientCards$ = this.ingredientCardsService.getIngredientsByParameter(this.categorySelected);
    this.categories$ = this.ingredientCardsService.getCategory();
  }
}
