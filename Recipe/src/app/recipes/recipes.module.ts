import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListPage } from './pages/recipe-list/recipe-list.page';
import { RecipeCardListComponent } from "./components/recipe-card-list/recipe-card-list.component";
import { RecipeCardComponent } from "./components/recipe-card/recipe-card.component";
import { SharedModule } from "../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {RecipeHeaderComponent} from "./components/recipe-header/recipe-header.component";
import {RecipeInfoComponent} from "./components/recipe-info/recipe-info.component";
import {RecipeIngredientComponent} from "./components/recipe-ingredient/recipe-ingredient.component";
import {RecipeIngredientListComponent} from "./components/recipe-ingredient-list/recipe-ingredient-list.component";
import {RecipeStepComponent} from "./components/recipe-step/recipe-step.component";
import {RecipeStepListComponent} from "./components/recipe-step-list/recipe-step-list.component";
import {SingleRecipePage} from "./pages/single-recipe/single-recipe.page";
import {SingleRecipeListComponent} from "./components/single-recipe-list/single-recipe-list.component";
import { ModifyRecipePage } from './pages/modify-recipe/modify-recipe.page';
import { AddRecipePage } from './pages/add-recipe/add-recipe.page';
import { ModifyRecipeListComponent } from './components/modify-recipe-list/modify-recipe-list.component';
import { AddRecipeListComponent } from './components/add-recipe-list/add-recipe-list.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
@NgModule({
  declarations: [
    RecipeListPage,
    RecipeCardComponent,
    RecipeCardListComponent,
    RecipeHeaderComponent,
    RecipeInfoComponent,
    RecipeIngredientComponent,
    RecipeIngredientListComponent,
    RecipeStepComponent,
    RecipeStepListComponent,
    SingleRecipePage,
    SingleRecipeListComponent,
    ModifyRecipePage,
    AddRecipePage,
    ModifyRecipeListComponent,
    AddRecipeListComponent
  ],
  exports: [
    RecipeCardComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatAutocompleteModule,
  ]
})

export class RecipesModule { }
