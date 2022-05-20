export interface IngredientResponse {
  image: string;
  id: string;
  name: string;
  category: Category;
}
export interface Category {
  id: string;
  name: string;
}



export interface IngredientPostRequest {
  image: string;
  name: string;
  categoryId: string;
}

export interface IngredientPutRequest {
  image: string;
  id: string;
  name: string;
  categoryId: string;
}



