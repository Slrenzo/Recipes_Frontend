export interface Ingredient {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit : string;
  image: string;
}

export interface IngredientRequest {
  ingredientId: string;
  quantity: number;
  unitId : string;
}
