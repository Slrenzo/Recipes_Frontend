import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {IngredientCardsService} from "../../services/ingredient-card.service";
import {Observable} from "rxjs";
import {Category} from "../../models/ingredient-card.model";
import {Router} from "@angular/router";


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
              private dialogRef: MatDialog) { }

  ngOnInit(): void { }

  onDelete(result: any) {
    this.ingredientCardsService.deleteIngredient(result.id).subscribe();
    this.dialogRef.closeAll();
    this.router.navigateByUrl("ingredients");
  }
}