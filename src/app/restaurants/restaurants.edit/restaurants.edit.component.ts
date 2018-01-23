import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Restaurant';
import { RestaurantService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants.edit',
  templateUrl: './restaurants.edit.component.html',
  styleUrls: ['./restaurants.edit.component.css'],
  providers: [RestaurantService, Restaurant]
})
export class RestaurantsEditComponent implements OnInit {

  private param: number;

  constructor(private Restaurant: Restaurant, private router: Router, private route: ActivatedRoute, private RestaurantService: RestaurantService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
    this.getRestaurant();
  }

  editRestaurant() {
    this.Restaurant.id = this.param;
    this.RestaurantService.updateRestaurant(this.param, this.Restaurant).subscribe(data => {
      this.router.navigate(['/restaurants']);
  });
  }

  getRestaurant() {
    this.RestaurantService.getRestaurant(this.param).subscribe(
      (data) => this.Restaurant = data,
      (err) => console.log(err)
    );
  }

}
