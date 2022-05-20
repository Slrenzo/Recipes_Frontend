import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientListPage} from "./pages/ingredient-list/ingredient-list.page";
import {ModifyIngredientComponent} from "./components/modify-ingredient/modify-ingredient.component";
import {AddIngredientComponent} from "./components/add-ingredient/add-ingredient.component";

const routes: Routes = [
  {path: '', component: IngredientListPage},
  {path: 'add', component: AddIngredientComponent},
  {path: ':id', component: ModifyIngredientComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IngredientsRoutingModule {
}
