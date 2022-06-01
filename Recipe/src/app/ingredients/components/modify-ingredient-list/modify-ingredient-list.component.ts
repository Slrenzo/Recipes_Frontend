import {Component, Input, OnInit} from '@angular/core';
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {IngredientCardsService} from "../../services/ingredient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarService} from "../../../snack-bar.service";
import {ImageService} from "../../../image.service";
import {DialogDeleteIngredientComponent} from "../dialog-delete-ingredient/dialog-delete-ingredient.component";

@Component({
  selector: 'app-modify-ingredient-list',
  templateUrl: './modify-ingredient-list.component.html',
  styleUrls: ['./modify-ingredient-list.component.scss']
})
export class ModifyIngredientListComponent implements OnInit {

  @Input() categories: Category[] = []
  ingredient!: IngredientResponse;

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private route: ActivatedRoute,
              private dialogDelete: MatDialog,
              private snackBarService: SnackBarService,
              private imageService: ImageService) {

    const ingredientId = this.route.snapshot.params['id'];
    console.log(ingredientId)
    this.ingredientCardsService.getIngredientById(ingredientId).subscribe((res: IngredientResponse) => {
      this.ingredient = res;
    });
  }

  onSave(ingredient: IngredientResponse) {
    this.ingredientCardsService.putIngredient(ingredient.id,
      {
        image : ingredient.image,
        id:ingredient.id,
        name:ingredient.name,
        categoryId:ingredient.category.id
      }).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Modification réussie.');
      },
      error: () => {
        this.snackBarService.openErrorSnackBar('Erreur lors de la modification.');
      }
    });
    this.router.navigateByUrl("ingredients");
  }

  onDelete(ingredient: IngredientResponse) {
    this.dialogDelete.open(DialogDeleteIngredientComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        image: ingredient.image,
        id: ingredient.id,
        name: ingredient.name
      }
    });
  }

  ngOnInit(): void { }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.ingredient.image = i?.toString() ?? '');
  }
}
