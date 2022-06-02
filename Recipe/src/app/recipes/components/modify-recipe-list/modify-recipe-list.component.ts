import {Component, Input, OnInit} from '@angular/core';
import {SingleRecipe} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {Router} from "@angular/router";
import {DialogDeleteComponent} from "../../../shared/components/dialog-delete/dialog-delete.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modify-recipe-list',
  templateUrl: './modify-recipe-list.component.html',
  styleUrls: ['./modify-recipe-list.component.scss']
})
export class ModifyRecipeListComponent implements OnInit {

  @Input() recipe!: SingleRecipe;

  constructor(private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private router: Router,
              private dialogDelete: MatDialog,) { }

  onDelete() {
    this.dialogDelete.open(DialogDeleteComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        title: 'Supprimer une recette',
        desc: 'Souhaitez vous vraiment supprimer cette recette ?',
        type: 'recipe',
        image: this.recipe.image,
        id: this.recipe.id,
        name: this.recipe.name
      }
    });
  }

  ngOnInit(): void { }
}
