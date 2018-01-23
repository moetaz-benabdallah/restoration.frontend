import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menus.service';
import { RestaurantService } from '../../restaurants/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../Menu';

@Component({
  selector: 'app-menus.edit',
  templateUrl: './menus.edit.component.html',
  styleUrls: ['./menus.edit.component.css'],
  providers: [MenuService, RestaurantService, Menu]
})
export class MenusEditComponent implements OnInit {

  private Restaurants: [any];
  private menu: Menu;
  private param: number;

  constructor(private Menu: Menu, private MenuService: MenuService, private RestaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
    this.getAllRestaurants();
    this.getMenu();
  }

  getAllRestaurants() {
    this.RestaurantService.getRestaurants().subscribe(
      (data) => this.Restaurants = data,
      (err) => console.log(err)
    );
  }

  getMenu() {
    this.MenuService.getMenu(this.param).subscribe(
      (data) => this.Menu = data,
      (err) => console.log(err)
    );
  }

  editMenu() {
    this.Menu.id = this.param;
    this.MenuService.updateMenu(this.param, this.Menu).subscribe(data => {
      this.router.navigate(['/menus']);
  });
  }
}
