import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRecipeRoutingModule } from './single-recipe-routing.module';
import { SingleRecipePage } from './pages/single-recipe/single-recipe.page';
import { SharedModule } from "../shared/shared.module";
import { SingleRecipeListComponent } from './components/single-recipe-list/single-recipe-list.component';
import { RecipeHeaderComponent } from './components/recipe-header/recipe-header.component';
import { RecipeIngredientComponent } from './components/recipe-ingredient/recipe-ingredient.component';
import { RecipeIngredientListComponent } from './components/recipe-ingredient-list/recipe-ingredient-list.component';
import { RecipeStepComponent } from './components/recipe-step/recipe-step.component';
import { RecipeStepListComponent } from './components/recipe-step-list/recipe-step-list.component';
import {RecipeInfoComponent} from "./components/recipe-info/recipe-info.component";
import { ModifyRecipeComponent } from '../recipes/components/modify-recipe/modify-recipe.component';

@NgModule({
  declarations: [
    SingleRecipePage,
    SingleRecipeListComponent,
    RecipeHeaderComponent,
    RecipeIngredientComponent,
    RecipeIngredientListComponent,
    RecipeStepComponent,
    RecipeStepListComponent,
    RecipeInfoComponent,
    ModifyRecipeComponent
  ],
  imports: [
    CommonModule,
    SingleRecipeRoutingModule,
    SharedModule
  ]
})
export class SingleRecipeModule { }
