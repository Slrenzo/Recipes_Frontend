import {Component, Input, OnInit} from '@angular/core';
import {Category, IngredientResponse} from "../../models/ingredient-card.model";
import {IngredientCardsService} from "../../services/ingredient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {SnackBarService} from "../../../snack-bar.service";
import {ImageService} from "../../../image.service";
import {DialogDeleteComponent} from "../../../shared/components/dialog-delete/dialog-delete.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modify-ingredient-list',
  templateUrl: './modify-ingredient-list.component.html',
  styleUrls: ['./modify-ingredient-list.component.scss']
})
export class ModifyIngredientListComponent implements OnInit {

  @Input() categories: Category[] = []
  @Input() ingredient!: IngredientResponse;
  ingredientForm!: FormGroup;

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private dialogDelete: MatDialog,
              private snackBarService: SnackBarService,
              private imageService: ImageService) { }


  onSave(ingredient: IngredientResponse) {
    this.ingredientCardsService.putIngredient(ingredient.id,
      {
        image : ingredient.image,
        id:ingredient.id,
        name:this.ingredientForm.value.name,
        categoryId:this.ingredientForm.value.categoryId
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

  onDelete() {
    this.dialogDelete.open(DialogDeleteComponent, {
      height: '500px',
      width: '750px',
      disableClose : true,
      data: {
        title: 'Supprimer un ingrédient',
        desc: 'Souhaitez vous vraiment supprimer cet ingrédient ?',
        type: 'ingredient',
        image: this.ingredient.image,
        id: this.ingredient.id,
        name: this.ingredient.name
      }
    });
  }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      name: this.ingredient.name,
      categoryId: this.ingredient.category.id
    });
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.ingredient.image = i?.toString() ?? '');
  }
}
