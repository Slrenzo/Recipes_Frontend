import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../image.service";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {RecipeRequest, Type} from "../../models/recipe.model";
import {Ingredient} from "../../models/ingredient.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-recipe-list',
  templateUrl: './add-recipe-list.component.html',
  styleUrls: ['./add-recipe-list.component.scss']
})
export class AddRecipeListComponent implements OnInit {

  @Input() types: Type[] = [];
  @Input() ingredients: Ingredient[] = [];

  image: string = "assets/add.png";

  recipe!: RecipeRequest;

  typeSelected!: string;

  recipeForm!: FormGroup;

  constructor(private imageService: ImageService,
              private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private formBuilder: FormBuilder,) { }


  stepForm = this.formBuilder.group({
    addDynamicElement: this.formBuilder.array([]),
  });

  get addDynamicElement() {
    return this.stepForm.get('addDynamicElement') as FormArray;
  }
  addItems() {
    this.addDynamicElement.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log(JSON.stringify(this.stepForm.value));
  }

  removeItem(stepIndex: number) {
    this.addDynamicElement.removeAt(stepIndex);
  }



  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

  onSubmitForm() {

    this.recipe = {
      name: this.recipeForm.value.name,
      people: this.recipeForm.value.people,
      time: Number(this.recipeForm.value.time.substring(0,2)) * 60
        + Number(this.recipeForm.value.time.substring(3,5)),
      image: this.image,
      typeId: this.recipeForm.value.typeId,
      ingredients: [{ ingredientId: '1unkKnjOhgQcIif',
        quantity: 4,
        unitId : '02'
      }],
      steps: [{descr: 'string',
        step_order: 1
      }]
    };
    console.log(this.recipe)
    this.recipeService.postRecipe(this.recipe).subscribe({
      next: () => {
        this.snackBarService.openSnackBar('Ajout réussi.');
      },
      error: () => {
        this.snackBarService.openErrorSnackBar("Erreur lors de l'ajout.");
      }
    });
  }


  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: [null],
      time: [null],
      people: [null],
      typeId: [null]
    });
  }

}
