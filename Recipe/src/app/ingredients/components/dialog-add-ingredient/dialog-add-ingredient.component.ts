import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {Observable} from "rxjs";
import {Category} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-dialog-add-ingredient',
  templateUrl: './dialog-add-ingredient.component.html',
  styleUrls: ['./dialog-add-ingredient.component.scss']
})
export class DialogAddIngredientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ingredientCardsService: IngredientCardsService) { }

  categories$!: Observable<Category[]>;

  // categorySelected = this.data.category;


  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
  }
}
