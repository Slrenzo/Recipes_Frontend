export class RecipeCard {
  id_recipe!: string;
  name!: string;
  time!: number;
  // type!: Type;

  constructor(id_recipe: string, name: string, time: number,/* type: Type*/) {
    this.id_recipe = id_recipe;
    this.name = name;
    this.time = time;
    // this.type = type;
  }
}

// export class Type {
//   id_type!: string;
//   name!: string;
//
//   constructor(id_type: string, name: string) {
//     this.id_type = id_type;
//     this.name = name;
//   }
// }
