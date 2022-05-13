import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleRecipeRoutingModule } from './single-recipe-routing.module';
import { SingleRecipePage } from './pages/single-recipe/single-recipe.page';
import { SharedModule } from "../shared/shared.module";
import { SingleRecipeListComponent } from './components/single-recipe-list/single-recipe-list.component';


@NgModule({
  declarations: [
    SingleRecipePage,
    SingleRecipeListComponent,

  ],
  imports: [
    CommonModule,
    SingleRecipeRoutingModule,
    SharedModule
  ]
})
export class SingleRecipeModule { }
