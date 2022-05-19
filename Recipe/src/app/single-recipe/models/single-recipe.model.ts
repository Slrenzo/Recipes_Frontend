/* recipe info */
export interface SingleRecipe {
  id: string;
  name: string;
  time: number;
  type: Type;
  ingredientsMeasures: IngredientsMeasures[];
  steps: Steps[];
  number_person: number;

}

export interface Type {
  id: string;
  name: string;

}

/* Ingredients */
export interface IngredientsMeasures {
  id: string;
  ingredients: Ingredients;
  quantity: number;
  units: Units;
}

export interface Ingredients {
  id: string;
  name: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}

export interface Units {
  id: string;
  name: string;
}

/* step */
export interface Steps {
  id: string;
  descr: string;
  step_order: number;
}
