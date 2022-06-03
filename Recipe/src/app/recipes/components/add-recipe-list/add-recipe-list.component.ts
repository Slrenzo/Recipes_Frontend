import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../image.service";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {RecipeRequest, Type} from "../../models/recipe.model";
import {Ingredient} from "../../models/ingredient.model";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StepRequest} from "../../models/step.model";
import {map, Observable, startWith} from "rxjs";
import {IngredientSearchModel} from "../../models/ingredientSearch.model";
import {Unit} from "../../models/unit.model";
import {IngredientCardsService} from "../../../ingredients/services/ingredient.service";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";

@Component({
  selector: 'app-add-recipe-list',
  templateUrl: './add-recipe-list.component.html',
  styleUrls: ['./add-recipe-list.component.scss']
})
export class AddRecipeListComponent implements OnInit {

  @Input() types: Type[] = [];
  @Input() ingredients: Ingredient[] = [];
  @Input() units: Unit[] = [];

  image: string = "assets/add.png";
  recipe!: RecipeRequest;
  recipeForm!: FormGroup;
  steps: StepRequest[] = [];
  ingredient!: Observable<IngredientResponse>;

  myControl = new FormControl('');
  filteredOptions!: Observable<IngredientSearchModel[]>;
  options: IngredientSearchModel[] = [];




test!: string;


  constructor(private imageService: ImageService,
              private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private formBuilder: FormBuilder,
              private ingredientService: IngredientCardsService) { }


  private filter(value: string): IngredientSearchModel[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  get addStep() {
    return this.recipeForm.get('addStep') as FormArray;
  }
  addItemsStep() {
    this.addStep.push(this.formBuilder.control(''));
  }
  removeStep(stepIndex: number) {
    this.addStep.removeAt(stepIndex);
  }


  getFormGroup(control: AbstractControl) { return control as FormGroup;}


  get addIngredient() {
    return this.recipeForm.controls['addIngredient'] as FormArray;
  }
  addItemsIngredient(id: string) {
    console.log(id)
    this.ingredient = this.ingredientService.getIngredientById(id);
    const ingredientForm = this.formBuilder.group({name: '', image: '', quantity: 1,unitId: [null]});
    this.addIngredient.push(ingredientForm);
  }
  removeIngredient(stepIndex: number) {
    this.addStep.removeAt(stepIndex);
  }


  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

  onSubmitForm() {
    console.log(this.recipeForm.value)
    // this.recipeForm.value.addDynamicElement.forEach((descr: string, index: number) => this.steps.push({step_order: index+1, descr:descr}));
    // this.recipe = {
    //   name: this.recipeForm.value.name,
    //   people: this.recipeForm.value.people,
    //   time: Number(this.recipeForm.value.time.substring(0,2)) * 60
    //     + Number(this.recipeForm.value.time.substring(3,5)),
    //   image: this.image,
    //   typeId: this.recipeForm.value.typeId,
    //   ingredients: [{ ingredientId: '1unkKnjOhgQcIif',
    //     quantity: 4,
    //     unitId : '02'
    //   }],
    //   steps: this.steps
    // };
    // console.log(this.recipe)
    // this.recipeService.postRecipe(this.recipe).subscribe({
    //   next: () => {
    //     this.snackBarService.openSnackBar('Ajout réussi.');
    //   },
    //   error: () => {
    //     this.snackBarService.openErrorSnackBar("Erreur lors de l'ajout.");
    //   }
    // });
    // this.router.navigateByUrl("recipes");
  }


  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      name: [null],
      time: '00:01',
      people: 1,
      typeId: [null],
      addStep: this.formBuilder.array([]),
      addIngredient: this.formBuilder.array([]),
    });

    this.ingredients.forEach(truc => this.options.push({id: truc.id, name: truc.name}));
    console.log(this.ingredients)


    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );



  }




}
