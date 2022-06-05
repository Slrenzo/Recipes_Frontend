import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../../image.service";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {RecipeRequest, Type} from "../../models/recipe.model";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {IngredientSearchModel} from "../../models/ingredientSearch.model";
import {Unit} from "../../models/unit.model";
import {IngredientCardsService} from "../../../ingredients/services/ingredient.service";
import {Router} from "@angular/router";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";

@Component({
  selector: 'app-add-recipe-list',
  templateUrl: './add-recipe-list.component.html',
  styleUrls: ['./add-recipe-list.component.scss']
})
export class AddRecipeListComponent implements OnInit {

  @Input() types: Type[] = [];
  @Input() ingredients: IngredientResponse[] = [];
  @Input() units: Unit[] = [];

  image: string = "assets/add.png";
  recipe!: RecipeRequest;
  recipeForm!: FormGroup;

  myControl = new FormControl('');
  filteredOptions!: Observable<IngredientSearchModel[]>;
  options: IngredientSearchModel[] = [];

  constructor(private imageService: ImageService,
              private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private formBuilder: FormBuilder,
              private ingredientService: IngredientCardsService,
              private router: Router,
              private cdref: ChangeDetectorRef) { }


  private filter(value: string): IngredientSearchModel[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  get addStep() {
    return this.recipeForm.get('addStep') as FormArray;
  }
  addItemsStep() {
    const stepForm = this.formBuilder.group({descr: [null], step_order: [null]})
    this.addStep.push(stepForm);
  }
  removeStep(stepIndex: number) {
    this.addStep.removeAt(stepIndex);
  }
  get addIngredient() {
    return this.recipeForm.controls['addIngredient'] as FormArray;
  }
  addItemsIngredient(id: string) {
    this.ingredientService.getIngredientById(id).subscribe(value => {
      const ingredientForm = this.formBuilder.group({
        ingredientId: value.id, name: value.name, image: value.image, quantity: 1, unitId: [null]});
      this.addIngredient.push(ingredientForm);
    });
  }
  removeIngredient(IngredientIndex: number) {
    this.addIngredient.removeAt(IngredientIndex);
  }

  getFormGroup(control: AbstractControl) { return control as FormGroup;}


  onFileUpload(event: any) {
    const file = event.target.files[0];
    this.imageService.readFile(file).then(i => this.image = i?.toString() ?? '');
  }

  onSubmitForm() {
    this.recipeForm.value.addStep.forEach((element: any, index: number) => element.step_order = index + 1)
    this.recipe = {
      name: this.recipeForm.value.name,
      people: this.recipeForm.value.people,
      time: Number(this.recipeForm.value.time.substring(0,2)) * 60
            + Number(this.recipeForm.value.time.substring(3,5)),
      image: this.image,
      typeId: this.recipeForm.value.typeId,
      ingredients: this.recipeForm.value.addIngredient,
      steps: this.recipeForm.value.addStep,
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

  ngAfterContentChecked() {
    this.cdref.detectChanges();
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

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );
  }

}
