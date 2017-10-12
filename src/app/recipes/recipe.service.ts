import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ListService } from '../shopping-list/list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Aged Italian Bananeroni', 'A delightfully deceiving dish for when you need to get your protein in but' +
      ' your girlfriend\'s vegan parents are Meat-Racist',
      'https://pixnio.com/free-images/2017/06/08/2017-06-08-15-49-20.jpg',
      [
        new Ingredient('Banana', 1),
        new Ingredient('sausage', 1)
      ]),
    new Recipe('Futuristic Nutrient Loaf', 'It\'\s 2017 and we need to start caring for the planet; minimize your' +
      ' carbon-footprint with this MealWorm-Protein-Enhanced-Meta-Gravy-Topped-Nutrient-Loaf! A crowd pleaser!',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Veggie_Loaf_Prison_Food.jpg',
      [
        new Ingredient('Insect Mash', 10),
        new Ingredient('Binding Agent', 3)
      ])
  ];

  constructor(private listService: ListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngsToShoppingList(ingredients: Ingredient[]) {
    this.listService.addIngredients(ingredients);
    console.log('click');
  }


}
