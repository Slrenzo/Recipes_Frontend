import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Category, IngredientCard} from "../../models/ingredient-card.model";
import {IngredientCardsService} from "../../services/ingredient-card.service";

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './dialog-modify-ingredient.component.html',
  styleUrls: ['./dialog-modify-ingredient.component.scss']
})
export class DialogModifyIngredientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ingredientCardsService: IngredientCardsService,
              private dialogRef: MatDialog) { }

  categories$!: Observable<Category[]>;

  categorySelected = this.data.category;

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
  }

  onSave(result: any) {
    let modifyIngredient = new IngredientCard(result.id, result.name, new Category(result.category));
    this.ingredientCardsService.putIngredient(result.id, modifyIngredient).subscribe();
    this.dialogRef.closeAll();
  }

  onDelete(result: any) {
    this.ingredientCardsService.deleteIngredient(result.id).subscribe();
    this.dialogRef.closeAll();
  }
}
