import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f') slform:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  constructor(private slService:ShoppingListService) { }
  ngOnInit() {
    this.subscription=this.slService.startedEditing
    .subscribe((index:number)=>{
      this.editedItemIndex=index;
      this.editMode=true;
      this.editedItem=this.slService.getIngredient(index);
      this.slform.setValue({
        name:this.editedItem.name,
        amount:this.editedItem.amount
      })
    });
  }
  onSubmit(form:NgForm) {
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
    }else{
      this.slService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }
  onClear(){
    this.slform.reset();
    this.editMode=false;
  }
  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
