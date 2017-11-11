import { NgModule } from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRouts: Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'shopping-list',component:ShoppingListComponent}
];
@NgModule({   
imports:[RouterModule.forRoot(appRouts)],
exports:[RouterModule]
})
export class AppRoutingModule {

}