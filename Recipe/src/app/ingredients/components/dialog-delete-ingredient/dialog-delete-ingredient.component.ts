import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IngredientCardsService} from "../../services/ingredient.service";
import {Observable} from "rxjs";
import {Category} from "../../models/ingredient-card.model";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


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
              private snackBar: MatSnackBar) { }

  ngOnInit(): void { }

  openErrorSnackBar(message: string) {
    this.snackBar.open(message, "",{
      duration: 7000,
      panelClass: ['error-snackbar']
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "",{
      duration: 7000,
      panelClass: ['valid-snackbar']
    });
  }

  onDelete(result: any) {

    this.ingredientCardsService.deleteIngredient(result.id).subscribe({
      next: () => {
        this.openSnackBar('Suppression réussie.');
      },
      error: () => {
        this.openErrorSnackBar('Erreur lors de la suppression.');
      }
    });

    this.dialogRef.closeAll();
    this.router.navigateByUrl("ingredients");
  }
}
