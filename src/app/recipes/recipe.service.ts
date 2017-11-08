import { Recipe } from "./recipe.Model";
import { EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
    recipeSelected =new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(' ItalianPizza',
         'Good Italian Pizza ',
          'https://eatpizzafresca.com/images/pepperoni_pizza.jpg?crc=4023861219',
         [
             new Ingredient('Meat',1),
             new Ingredient('French Fries',20)
         ]),
        new Recipe('American Pizza',
         'Good Italian Pizza ', 
         'https://thewebminer.com/blog/wp-content/uploads/2015/08/pizza-1.jpg'
        ,[
            new Ingredient('Buns',2),
            new Ingredient('Meat',2)
        ]),
        new Recipe('Pizza',
         'Good Italian Pizza ',
         'https://eatpizzafresca.com/images/pepperoni_pizza.jpg?crc=4023861219',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
        ])
    ];
    constructor(private slService:ShoppingListService ){

    }
    getRecipe(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}