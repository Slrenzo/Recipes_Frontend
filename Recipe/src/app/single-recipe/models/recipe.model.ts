import { Ingredient } from "./ingredient.model";
import { Step } from "./step.model";

export interface Recipe {
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
