import { Component, OnInit } from '@angular/core';
import {IngredientCard} from "../models/ingredient-card.model";
import {IngredientCardsService} from "../services/ingredient-card.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-ingredient-card-list',
  templateUrl: './ingredient-card-list.component.html',
  styleUrls: ['./ingredient-card-list.component.scss']
})
export class IngredientCardListComponent implements OnInit {

  ingredientCards$!: Observable<IngredientCard[]>;

  constructor(private ingredientCardsService: IngredientCardsService) {  }

  ngOnInit(): void {
    this.ingredientCards$ = this.ingredientCardsService.getAllFaceSnaps();
  }
}
