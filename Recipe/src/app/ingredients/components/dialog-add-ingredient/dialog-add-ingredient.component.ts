import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {Observable} from "rxjs";
import {Category, IngredientCard} from "../../models/ingredient-card.model";

@Component({
  selector: 'app-dialog-add-ingredient',
  templateUrl: './dialog-add-ingredient.component.html',
  styleUrls: ['./dialog-add-ingredient.component.scss']
})
export class DialogAddIngredientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ingredientCardsService: IngredientCardsService,
              private dialogRef: MatDialog) { }

  categories$!: Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
  }

  onCreate(result: any) {
    console.log(result.name);
    console.log(result.category);
    let modifyIngredient = new IngredientCard("", result.name, new Category(result.category));
    this.ingredientCardsService.postIngredient(modifyIngredient).subscribe();
    this.dialogRef.closeAll();
  }
}
