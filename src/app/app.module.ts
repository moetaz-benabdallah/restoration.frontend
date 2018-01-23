import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsNewComponent } from './restaurants/restaurants.new/restaurants.new.component';
import { MenusComponent } from './menus/menus.component';
import { MenusNewComponent } from './menus/menus.new/menus.new.component';
import { RestaurantsEditComponent } from './restaurants/restaurants.edit/restaurants.edit.component';
import { MenusEditComponent } from './menus/menus.edit/menus.edit.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantsNewComponent,
    MenusComponent,
    MenusNewComponent,
    RestaurantsEditComponent,
    MenusEditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
