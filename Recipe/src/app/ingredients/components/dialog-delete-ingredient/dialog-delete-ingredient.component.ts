import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IngredientCardsService} from "../../services/ingredient.service";
import {Observable} from "rxjs";
import {Category} from "../../models/ingredient-card.model";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../snack-bar.service";

@Component({
  selector: 'app-dialog-delete-ingredient',
  templateUrl: './dialog-delete-ingredient.component.html',
  styleUrls: ['./dialog-delete-ingredient.component.scss']
})
export class DialogDeleteIngredientComponent implements OnInit {

  categories$!: Observable<Category[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private dialogRef: MatDialog,
              private snackBarService: SnackBarService) { }

  onDelete(result: any) {
    this.ingredientCardsService.deleteIngredient(result.id).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Suppression réussie.');
      },
      error: () => {
        this.snackBarService.openErrorSnackBar('Erreur lors de la suppression.');
      }
    });

    this.dialogRef.closeAll();
    this.router.navigateByUrl("ingredients");
  }

  ngOnInit(): void { }
}
