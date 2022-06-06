import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ImageService} from "../../../image.service";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {RecipeRequest, Type} from "../../models/recipe.model";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Unit} from "../../models/unit.model";
import {Router} from "@angular/router";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";
import {IngredientsFormComponent} from "../ingredients-form/ingredients-form.component";
import {IngredientRequest} from "../../models/ingredient.model";
import {StepsFormComponent} from "../steps-form/steps-form.component";
import {StepRequest} from "../../models/step.model";

@Component({
  selector: 'app-add-recipe-list',
  templateUrl: './add-recipe-list.component.html',
  styleUrls: ['./add-recipe-list.component.scss']
})
export class AddRecipeListComponent implements OnInit {

  @Input() types: Type[] = [];
  @Input() ingredients: IngredientResponse[] = [];
  @Input() units: Unit[] = [];

  @ViewChild(IngredientsFormComponent) ingredientsForm!:IngredientsFormComponent;
  @ViewChild(StepsFormComponent) stepsForm!:StepsFormComponent;

  image: string = "assets/add.png";
  recipe!: RecipeRequest;
  recipeForm!: FormGroup;

  ingredientRequest: IngredientRequest[] = [];
  steps: StepRequest[] = [];

  constructor(private imageService: ImageService,
              private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private formBuilder: FormBuilder,
              private router: Router) { }


  getFormGroup(control: AbstractControl) { return control as FormGroup;}


  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

  onSubmitForm() {
    this.ingredientsForm.submit();
    this.stepsForm.submit();

    this.recipe = {
      name: this.recipeForm.value.name,
      people: this.recipeForm.value.people,
      time: Number(this.recipeForm.value.time.substring(0,2)) * 60
        + Number(this.recipeForm.value.time.substring(3,5)),
      image: this.image,
      typeId: this.recipeForm.value.typeId,
      ingredients: this.ingredientRequest,
      steps: this.steps,
    };

    this.recipeService.postRecipe(this.recipe).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Ajout réussi.');
      },
      error: () => {
        this.snackBarService.openErrorSnackBar("Erreur lors de l'ajout.");
      }
    });
    this.router.navigateByUrl("recipes");
  }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: [null],
      time: '00:01',
      people: 1,
      typeId: [null]
    });
  }

  setIngredient(ingredients: IngredientRequest[]) {
    this.ingredientRequest = ingredients;
  }

  setStep(steps: StepRequest[]) {
    this.steps = steps;
  }
}
