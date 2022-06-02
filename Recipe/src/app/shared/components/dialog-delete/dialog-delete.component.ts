import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IngredientCardsService} from "../../../ingredients/services/ingredient.service";
import {Router} from "@angular/router";
import {SnackBarService} from "../../../snack-bar.service";
import {RecipeService} from "../../../recipes/services/recipe.service";

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ingredientCardsService: IngredientCardsService,
              private recipeService: RecipeService,
              private router: Router,
              private dialogRef: MatDialog,
              private snackBarService: SnackBarService) { }

  onDelete(data: any) {
    if (data.type == 'ingredient') {
      this.ingredientCardsService.deleteIngredient(data.id).subscribe({
        next: () => {
          this.snackBarService.openSnackBar('Suppression réussie.');
        },
        error: () => {
          this.snackBarService.openErrorSnackBar('Erreur lors de la suppression.');
        }
      });
      this.dialogRef.closeAll();
      this.router.navigateByUrl("ingredients");
    } else if (data.type == 'recipe') {
      this.recipeService.deleteRecipe(data.id).subscribe({
        next: () => {
          this.snackBarService.openSnackBar('Suppression réussie.');
        },
        error: () => {
          this.snackBarService.openErrorSnackBar('Erreur lors de la suppression.');
        }
      });
      this.dialogRef.closeAll();
      this.router.navigateByUrl("recipes");
    }
  }

  ngOnInit(): void { }
}
