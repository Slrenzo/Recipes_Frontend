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

  constructor(private dialog: MatDialog,
              private ingredientCardsService: IngredientCardsService) {  }

  onCategorySelected() {
    this.ingredientCards$ = this.ingredientCardsService.getIngredientsByParameter(this.categorySelected);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result != null) {
    //     let modifyIngredient = new IngredientCard(result.id, result.name, new Category(result.category));
    //     this.ingredientCardsService.putIngredient(result.id, modifyIngredient).subscribe();
    //   }
    // });
  }

  ngOnInit(): void {
    this.ingredientCards$ = this.ingredientCardsService.getIngredientsByParameter(this.categorySelected);
    this.categories$ = this.ingredientCardsService.getCategory();
  }
}
