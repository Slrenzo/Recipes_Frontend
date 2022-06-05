import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {RecipeRequest, SingleRecipe, Type} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {SnackBarService} from "../../../snack-bar.service";
import {Router} from "@angular/router";
import {DialogDeleteComponent} from "../../../shared/components/dialog-delete/dialog-delete.component";
import {MatDialog} from "@angular/material/dialog";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {IngredientSearchModel} from "../../models/ingredientSearch.model";
import {Unit} from "../../models/unit.model";
import {IngredientCardsService} from "../../../ingredients/services/ingredient.service";
import {ImageService} from "../../../image.service";
import {IngredientResponse} from "../../../ingredients/models/ingredient-card.model";
import {IngredientRequest} from "../../models/ingredient.model";

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


  recipeRequest!: RecipeRequest;
  recipeForm!: FormGroup;
  image: string = "assets/add.png";

  myControl = new FormControl('');
  filteredOptions!: Observable<IngredientSearchModel[]>;
  options: IngredientSearchModel[] = [];
  ingredientRequest: IngredientRequest[] = [];

  constructor(private recipeService: RecipeService,
              private snackBarService: SnackBarService,
              private router: Router,
              private dialogDelete: MatDialog,
              private formBuilder: FormBuilder,
              private ingredientService: IngredientCardsService,
              private imageService: ImageService,
              private cdref: ChangeDetectorRef) { }

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

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

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
    this.recipeForm.value.addIngredient.forEach((value: any)=> this.ingredientRequest.push({ingredientId : value.ingredientId,
    quantity: value.quantity, unitId: value.unitId}));

    this.recipeRequest = {
      name: this.recipeForm.value.name,
      people: this.recipeForm.value.people,
      time: Number(this.recipeForm.value.time.substring(0,2)) * 60
        + Number(this.recipeForm.value.time.substring(3,5)),
      image: this.image,
      typeId: this.recipeForm.value.typeId,
      ingredients: this.ingredientRequest,
      steps: this.recipeForm.value.addStep,
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
      typeId: this.recipe.type.id,
      addStep: this.formBuilder.array([]),
      addIngredient: this.formBuilder.array([])
    });

    this.recipe.ingredients.forEach(value => {
      const ingredientForm = this.formBuilder.group({
      ingredientId: value.ingredientId, name: value.name, image: value.image, quantity: value.quantity, unitId: value.category.id});
      this.addIngredient.push(ingredientForm);
    })
    this.recipe.steps.forEach(value => {
      const stepForm = this.formBuilder.group({
        descr: value.descr});
      this.addStep.push(stepForm);
    })

    this.ingredients.forEach(truc => this.options.push({id: truc.id, name: truc.name}));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value || '')),
    );
  }
}
