import {Component, OnInit} from '@angular/core';
import {IngredientCardsService} from "../../services/ingredient.service";
import {Observable} from "rxjs";
import {Category, IngredientPostRequest} from "../../models/ingredient-card.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import {ImageService} from "../../../image.service";
import {SnackBarService} from "../../../snack-bar.service";

@Component({
  selector: 'app-dialog-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.scss']
})
export class AddIngredientComponent implements OnInit {

  ingredientPostModel!: IngredientPostRequest;
  ingredientForm!: FormGroup;

  image: string = "assets/add.png";
  categories$!: Observable<Category[]>;

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private imageService: ImageService,
              private snackBarService: SnackBarService) { }

  onSubmitForm() {
    console.log(this.image);
    this.ingredientCardsService.postIngredient({
      image: this.image,
      name: this.ingredientForm.value.name,
      categoryId: this.ingredientForm.value.categoryId
    }).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Ajout réussi.');
      },
      error: () => {
        this.snackBarService.openErrorSnackBar("Erreur lors de l'ajout.");
      }
    });
    this.router.navigateByUrl("ingredients");
  }

  onFileUpload(event: any) {
    const file = event.target.files[0];
    //this.image = this.imageService.converToBase64(file);
  }

  ngOnInit(): void {
    this.categories$ = this.ingredientCardsService.getCategory();
    this.ingredientForm = this.formBuilder.group({
      name: [null],
      categoryId: [null]
    });
  }
}

