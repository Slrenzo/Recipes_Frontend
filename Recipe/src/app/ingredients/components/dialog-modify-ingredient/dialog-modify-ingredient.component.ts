import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Category, IngredientCard} from "../../models/ingredient-card.model";
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {DialogDeleteIngredientComponent} from "../dialog-delete-ingredient/dialog-delete-ingredient.component";

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './dialog-modify-ingredient.component.html',
  styleUrls: ['./dialog-modify-ingredient.component.scss']
})
export class DialogModifyIngredientComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ingredientCardsService: IngredientCardsService,
              private dialogRef: MatDialog,
              private dialogDelete: MatDialog) { }

  categories$!: Observable<Category[]>;

  onSave(result: any) {
    let modifyIngredient = new IngredientCard(result.id, result.name, new Category(result.category));
    this.ingredientCardsService.putIngredient(result.id, modifyIngredient).subscribe();
    this.dialogRef.closeAll();
  }

  onDeleteButton(result: any) {
    this.dialogDelete.open(DialogDeleteIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        id: result.id,
        name: result.name,
      }
    });
  }

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
  }
}
