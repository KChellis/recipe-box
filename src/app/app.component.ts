import { Component } from '@angular/core';
import { Recipe } from './models/recipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Chocolate Chip Cookies', ['1 1/2 cups butter or margarine softened', '1 1/4 cups granulated sugar', '1 1/4 cups packed brown sugar', '1 tablespoon vanilla', '2 eggs', '4 cups all-purpose flour', '2 teaspoons baking soda', '1 teaspoon salt', '1 package (24 ounces) semisweet chocolate chips'],['Heat oven to 350ºF.', 'Mix butter, sugars, vanilla and eggs in large bowl using spoon', 'Stir in flour, baking soda and salt.', 'Stir in chocolate chips', 'Drop dough by rounded measuring tablespoonfuls about 2 inches apart onto ungreased cookie sheet', 'Bake 12 to 15 minutes or until light brown', 'Cool slightly. Remove from cookie sheet to wire rack; cool.']),
    new Recipe('Sugar Cookie',['2 3/4 cups all-purpose flour', '1 teaspoon baking soda', '1/2 teaspoon baking powder', '1 cup butter, softened', '1 1/2 cups white sugar', '1 egg'], ['Preheat oven to 375 degrees F', 'In a small bowl, stir together flour, baking soda, and baking powder. Set aside.', 'In a large bowl, cream together the butter and sugar until smooth.', 'Beat in egg and vanilla.', 'Gradually blend in the dry ingredients.', 'Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.', 'Bake 8 to 10 minutes in the preheated oven, or until golden.', 'Let stand on cookie sheet two minutes before removing to cool on wire racks.'])
  ]

  selectedRecipe = null;

  onSelect(recipe: Recipe): void {
    if(recipe.selected){
      recipe.selected = false;
      recipe.class = "";
      this.selectedRecipe = null;
    }else {
      recipe.selected = true;
      recipe.class = "card";
    }
  }

  select(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  addRecipe(): void {
    let newRecipe: Recipe = new Recipe('', [''], [''])
    this.recipes.push(newRecipe);
    newRecipe.selected = true;
    newRecipe.class = "card";
    this.selectedRecipe = newRecipe;
  }

  addIngredient(recipe: Recipe): void {
    recipe.ingredients.push("");
  }

  addDirection(recipe: Recipe): void {
    recipe.directions.push("");
  }

  finishEdit(): void {
    this.selectedRecipe = null;
  }

  hideAll(): void {
    for (var i = 0; i < this.recipes.length; i++) {
      this.recipes[i].selected = false;
      this.recipes[i].class = "";
      this.selectedRecipe = null;
    }
  }

  deleteRecipe(recipe: Recipe): void {
    let index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
  }

  deleteIngredient(recipe: Recipe): void {
    recipe.ingredients.splice(-1, 1);
  }

  deleteDirection(recipe: Recipe): void {
    recipe.directions.splice(-1, 1);
  }
}
