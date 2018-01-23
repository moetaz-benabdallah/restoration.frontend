import { Component, OnInit } from '@angular/core';
import { MenuService } from './menus.service';
import { RestaurantService } from '../restaurants/restaurants.service';
import { Menu } from './Menu';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  providers: [MenuService, RestaurantService, Menu]
})
export class MenusComponent implements OnInit {

  private Menus : [Menu];

  constructor(private MenuService: MenuService, private RestaurantService: RestaurantService, private Menu: Menu) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.MenuService.getMenus().subscribe(
      (data) => this.Menus = data,
      (err) => console.log(err),
      () => this.setRestaurants()
    );
  }

  setRestaurants(){
    for(let i = 0; i < this.Menus.length; i++){
      this.RestaurantService.getRestaurant(this.Menus[i].restaurantId).subscribe(
        (data) => this.Menus[i].restaurantName = data.name,
        (err) => console.log(err)
      );
    }
  }

  deleteMenu(id){
    this.MenuService.deleteMenu(id).subscribe(
      (data) => window.location.reload(),
      (err) => console.log(err)
    );
  }

}
