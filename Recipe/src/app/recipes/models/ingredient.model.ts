import {Category} from "../../ingredients/models/ingredient-card.model";

export interface Ingredient {
  ingredientId: string;
  name: string;
  category: Category;
  quantity: number;
  unit : string;
  image: string;
}

export interface IngredientRequest {
  ingredientId: string;
  quantity: number;
  unitId : string;
}

