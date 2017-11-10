import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.Model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  recipes:Recipe[];
  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute,
              private router:Router) { }
  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    );
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
