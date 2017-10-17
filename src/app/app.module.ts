import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListService } from './shopping-list/list.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [ ListService, RecipeService, DataStorageService, AuthService, AuthGuardService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}


