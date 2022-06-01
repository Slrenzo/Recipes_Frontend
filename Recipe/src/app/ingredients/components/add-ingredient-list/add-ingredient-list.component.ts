import {Component, Input, OnInit} from '@angular/core';
import {IngredientCardsService} from "../../services/ingredient.service";
import {Category, IngredientPostRequest} from "../../models/ingredient-card.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from '@angular/router';
import {ImageService} from "../../../image.service";
import {SnackBarService} from "../../../snack-bar.service";

@Component({
  selector: 'app-add-ingredient-list',
  templateUrl: './add-ingredient-list.component.html',
  styleUrls: ['./add-ingredient-list.component.scss']
})
export class AddIngredientListComponent implements OnInit {

  @Input() categories: Category[] = []

  ingredientPostModel!: IngredientPostRequest;
  ingredientForm!: FormGroup;
  image: string = "assets/add.png";

  constructor(private ingredientCardsService: IngredientCardsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private imageService: ImageService,
              private snackBarService: SnackBarService) {
  }

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
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      name: [null],
      categoryId: [null]
    });
  }
}

