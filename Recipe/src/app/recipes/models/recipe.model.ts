import {Ingredient, IngredientRequest} from "./ingredient.model";
import {Step, StepRequest} from "./step.model";

export interface SingleRecipe {
  id: string;
  name: string;
  time: number;
  type: Type;
  ingredients: Ingredient[];
  steps: Step[];
  people: number;
  image: string;
}
export interface Type {
  id: string;
  name: string;
}

export interface RecipeRequest {
  name: string;
  people: number;
  time: number;
  image: string;
  typeId: string;
  ingredients: IngredientRequest[];
  steps: StepRequest[];
}
