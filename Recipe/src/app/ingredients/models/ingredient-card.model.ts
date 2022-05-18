export interface IngredientResponse {
  id: string;
  name: string;
  category: Category;
}
export interface Category {
  id: string;
  name: string;
}



export interface IngredientPostRequest {
  name: string;
  categoryId: string;
}

export interface IngredientPutRequest {
  id: string;
  name: string;
  categoryId: string;
}



