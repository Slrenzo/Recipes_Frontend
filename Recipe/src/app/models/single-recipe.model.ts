/* recipe info */
export class SingleRecipe {
  id_recipe!: string;
  name!: string;
  time!: number;
  type!: Type;
  ingredientsMeasures!: IngredientsMeasures[];
  steps!: Steps[];

  constructor(id_recipe: string, name: string, time: number, type: Type,
                 ingredientsMeasures: IngredientsMeasures, steps:Steps) {
    this.id_recipe = id_recipe;
    this.name = name;
    this.time = time;
    this.type = type;
    this.ingredientsMeasures = [ingredientsMeasures];
    this.steps = [steps];
  }
}

export class Type {
  id_type!: string;
  name!: string;

  constructor(id_type: string, name: string) {
    this.id_type = id_type;
      this.name = name;
    }
  }

/* Ingredients */
export class IngredientsMeasures {
  id_ingredient_measure!: string;
  ingredients!: Ingredients;
  quantity!: number;
  units!: Units;

  constructor(id_ingredient_measure: string, ingredients: Ingredients, units: Units, quantity: number) {
    this.id_ingredient_measure = id_ingredient_measure;
    this.ingredients = ingredients;
    this.units = units;
    this.quantity = quantity;
  }
}

export class Ingredients {
  id_ingredient!: string;
  name!: string;
  category!: Category;

  constructor(id_ingredient: string, name: string, category: Category, ) {
    this.id_ingredient = id_ingredient;
    this.name = name;
    this.category = category;

  }
}

export class Category {
  id_category!: string;
  name!: string;

  constructor(id_category: string, name: string) {
    this.id_category = id_category;
    this.name = name;
  }
}

export class Units {
  id_unit!: string;
  name!: string;

  constructor(id_unit: string, name: string) {
    this.id_unit = id_unit;
    this.name = name;
  }
}




/* step */
export class Steps {
  id_step!: string;
  descr!: string;
  step_order!: number;

  constructor(id_step: string, descr: string, step_order: number) {
    this.id_step = id_step;
    this.descr = descr;
    this.step_order = step_order;
  }
}
