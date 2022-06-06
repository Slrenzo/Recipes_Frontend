import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ImageService} from "../../../image.service";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {IngredientCardsService} from "../../../ingredients/services/ingredient.service";
import {map, Observable, startWith} from "rxjs";
import {IngredientSearchModel} from "../../models/ingredientSearch.model";
import {SingleRecipe, Type} from "../../models/recipe.model";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";
import {Unit} from "../../models/unit.model";
import {IngredientRequest} from "../../models/ingredient.model";

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss']
})
export class IngredientsFormComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<IngredientRequest[]>();
  @Input() recipe!: SingleRecipe;
  @Input() types: Type[] = [];
  @Input() ingredients: IngredientResponse[] = [];
  @Input() units: Unit[] = [];

  myControl = new FormControl('');
  filteredOptions!: Observable<IngredientSearchModel[]>;
  options: IngredientSearchModel[] = [];

  ingredientForm!: FormGroup;
  ingredientRequest: IngredientRequest[] = [];

  constructor(private imageService: ImageService,
              private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private formBuilder: FormBuilder,
              private ingredientService: IngredientCardsService) { }

  private filter(value: string): IngredientSearchModel[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  get addIngredient() {
    return this.ingredientForm.controls['addIngredient'] as FormArray;
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

  ngOnInit(): void {
    this.ingredientForm = this.formBuilder.group({
      addIngredient: this.formBuilder.array([]),
    });
    this.ingredients.forEach(ingredient => this.options.push({id: ingredient.id, name: ingredient.name}));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );

    // load
    if (this.recipe != null) {
      this.recipe.ingredients.forEach(value => {
        const ingredientForm = this.formBuilder.group({
          ingredientId: value.ingredientId,
          name: value.name,
          image: value.image,
          quantity: value.quantity,
          unitId: value.category.id
        });
        this.addIngredient.push(ingredientForm);
      })
    }
  }

  submit() {
    this.ingredientForm.value.addIngredient.forEach((value: any)=> this.ingredientRequest.push({ingredientId : value.ingredientId,
      quantity: value.quantity, unitId: value.unitId}));
    this.newItemEvent.emit(this.ingredientRequest);
  }
}
