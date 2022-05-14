import { Component, OnInit, Input } from '@angular/core';
import {Category, IngredientCard} from "../../models/ingredient-card.model";
import {MatDialog} from "@angular/material/dialog";
import {DialogModifyIngredientComponent} from "../dialog-modify-ingredient/dialog-modify-ingredient.component";
import {IngredientCardsService} from "../../services/ingredient-card.service";

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.scss']
})

export class IngredientCardComponent implements OnInit {

  @Input() ingredientCard!: IngredientCard

  constructor(private dialog: MatDialog,
              private ingredientCardsService: IngredientCardsService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogModifyIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        id: this.ingredientCard.id_ingredient,
        name: this.ingredientCard.name,
        category: this.ingredientCard.category.id_category
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != "") {
        let modifyIngredient = new IngredientCard(result.id, result.name, new Category(result.category));
        this.ingredientCardsService.putIngredient(result.id, modifyIngredient).subscribe();
      }
    });
  }

  ngOnInit(): void {  }
}

