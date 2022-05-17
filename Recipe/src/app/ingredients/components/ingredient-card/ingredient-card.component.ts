import { Component, OnInit, Input } from '@angular/core';
import {IngredientCard} from "../../models/ingredient-card.model";
import {MatDialog} from "@angular/material/dialog";
import {DialogModifyIngredientComponent} from "../dialog-modify-ingredient/dialog-modify-ingredient.component";

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})

export class IngredientCardComponent implements OnInit {

  @Input() ingredientCard!: IngredientCard

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(DialogModifyIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        id: this.ingredientCard.id_ingredient,
        name: this.ingredientCard.name,
        category: this.ingredientCard.category.id_category
      }
    });
  }

  ngOnInit(): void {  }
}

