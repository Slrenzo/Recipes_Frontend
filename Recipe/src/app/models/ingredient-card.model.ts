export class IngredientCard {

  id_ingredient!: string;
  name!: string;
  category!: Category;

  constructor(id_ingredient:string, name:string, category:Category) {
    this.id_ingredient = id_ingredient;
    this.name = name;
    this.category= category;
  }
}

export class Category {
  id_category!: string;
  name!: string;

  constructor(name:string, id_category:string) {
    this.name = name;
    this.id_category= id_category;
  }
}
