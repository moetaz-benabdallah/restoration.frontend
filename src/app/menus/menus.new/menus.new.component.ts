import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menus.service';
import { RestaurantService } from '../../restaurants/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../Menu';


@Component({
  selector: 'app-menus.new',
  templateUrl: './menus.new.component.html',
  styleUrls: ['./menus.new.component.css'],
  providers: [MenuService, RestaurantService, Menu]
})
export class MenusNewComponent implements OnInit {

  private Restaurants : [any];
  private menu : Menu;

  constructor(private Menu: Menu, private MenuService: MenuService, private RestaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.RestaurantService.getRestaurants().subscribe(
      (data) => this.Restaurants = data,
      (err) => console.log(err)
    );
  }

  AddMenu(){
      this.MenuService.newMenu(this.Menu).subscribe(data => {
          this.router.navigate(['/menus']);
      });
  }

  Cancel() {
    this.Menu = new Menu();
    this.router.navigate(['/menus']);
  }

}
