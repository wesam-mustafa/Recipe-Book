import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";


const appRouts: Routes = [
    {path:'',component:HomeComponent},
    {path:'recipes',loadChildren:'./recipes/recipes.module#RecipesModule'},
    {path:'shopping-list',component:ShoppingListComponent}
];
@NgModule({   
imports:[RouterModule.forRoot(appRouts)],
exports:[RouterModule]
})
export class AppRoutingModule {

}