import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {RecipeRequest, SingleRecipe, Type} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {Router} from "@angular/router";
import {DialogDeleteComponent} from "../../../shared/components/dialog-delete/dialog-delete.component";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Unit} from "../../models/unit.model";
import {ImageService} from "../../../image.service";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";
import {IngredientRequest} from "../../models/ingredient.model";
import {IngredientsFormComponent} from "../ingredients-form/ingredients-form.component";
import {StepRequest} from "../../models/step.model";
import {StepsFormComponent} from "../steps-form/steps-form.component";

@Component({
  selector: 'app-modify-recipe-list',
  templateUrl: './modify-recipe-list.component.html',
  styleUrls: ['./modify-recipe-list.component.scss']
})
export class ModifyRecipeListComponent implements OnInit {

  @Input() recipe!: SingleRecipe;
  @Input() types: Type[] = [];
  @Input() ingredients: IngredientResponse[] = [];
  @Input() units: Unit[] = [];
  @ViewChild(IngredientsFormComponent) ingredientsForm!:IngredientsFormComponent;
  @ViewChild(StepsFormComponent) stepsForm!:StepsFormComponent;

  recipeRequest!: RecipeRequest;
  recipeForm!: FormGroup;
  image: string = "assets/add.png";

  ingredientRequest: IngredientRequest[] = [];
  steps: StepRequest[] = [];

  constructor(private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private router: Router,
              private dialogDelete: MatDialog,
              private formBuilder: FormBuilder,
              private imageService: ImageService) { }

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

  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

  onSubmitForm() {
    this.ingredientsForm.submit();
    this.stepsForm.submit();
    this.recipeRequest = {
      name: this.recipeForm.value.name,
      people: this.recipeForm.value.people,
      time: Number(this.recipeForm.value.time.substring(0,2)) * 60
        + Number(this.recipeForm.value.time.substring(3,5)),
      image: this.image,
      typeId: this.recipeForm.value.typeId,
      ingredients: this.ingredientRequest,
      steps: this.steps
    };
    this.recipeService.putRecipe(this.recipe.id, this.recipeRequest).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Modification réussi.');
      },
      error: () => {
        this.snackBarService.openErrorSnackBar("Erreur lors de la modification.");
      }
    });
    this.router.navigateByUrl("recipes");
  }

  timeConvert(time: number): string {
    return time < 60 ? '00:' + ("00" + time).slice(-2)
      : ("00" + Math.round(time / 60)).slice(-2) + ':' + ("00" + time % 60).slice(-2);
  }

  ngOnInit(): void {
    this.image = this.recipe.image;
    this.recipeForm = this.formBuilder.group({
      name: this.recipe.name,
      time: this.timeConvert(this.recipe.time),
      people: this.recipe.people,
      typeId: this.recipe.type.id
    });
  }

  setIngredient(ingredients: IngredientRequest[]) {
    this.ingredientRequest = ingredients;
  }
  setStep(steps: StepRequest[]) {
    this.steps = steps;
  }
}
