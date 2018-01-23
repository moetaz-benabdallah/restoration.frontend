import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsNewComponent } from './restaurants/restaurants.new/restaurants.new.component';
import { MenusComponent } from './menus/menus.component';
import { MenusNewComponent } from './menus/menus.new/menus.new.component';
import { RestaurantsEditComponent } from './restaurants/restaurants.edit/restaurants.edit.component';
import { MenusEditComponent } from './menus/menus.edit/menus.edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'restaurants/new',
    component: RestaurantsNewComponent
  },
  {
    path: 'restaurants/edit/:id',
    component: RestaurantsEditComponent
  },
  {
    path: 'menus',
    component: MenusComponent
  },
  {
    path: 'menus/new',
    component: MenusNewComponent
  },
  {
    path: 'menus/edit/:id',
    component: MenusEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
