import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';
import { AddRecipePage } from './pages/add-recipe/add-recipe.page';


@NgModule({
  declarations: [
    AddRecipePage
  ],
  imports: [
    CommonModule,
    AddRecipeRoutingModule
  ]
})
export class AddRecipeModule { }
