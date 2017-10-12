import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  private sub: Subscription;

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.ingredients = this.listService.getIngredients();
    this.sub = this.listService.ingsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    return index; //placeholder
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
