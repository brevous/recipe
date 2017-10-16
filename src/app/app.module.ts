import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListService } from './shopping-list/list.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    AuthModule
  ],
  providers: [ ListService, RecipeService, DataStorageService, AuthService, AuthGuardService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


