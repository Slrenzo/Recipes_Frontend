import {NgModule} from "@angular/core";
import {IngredientCardListComponent} from "./ingredient-card-list/ingredient-card-list.component";
import {RouterModule, Routes} from "@angular/router";
import {RecipeCardListComponent} from "./recipe-card-list/recipe-card-list.component";
import {SingleRecipeComponent} from "./single-recipe/single-recipe.component";

const routes: Routes = [
  { path: 'ingredients', component: IngredientCardListComponent},
  { path: 'recipes/:id', component: SingleRecipeComponent},
  { path: 'recipes', component: RecipeCardListComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class appRoutingModule {

}
