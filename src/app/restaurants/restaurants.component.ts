import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurants.service';
import { Restaurant } from './Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService, Restaurant]
})
export class RestaurantsComponent implements OnInit {

  private Restaurants : [Restaurant];
  private Search : String;

  constructor(private RestaurantService: RestaurantService, private Restuarant: Restaurant) {}

  getAll() {
    this.RestaurantService.getRestaurants().subscribe(
      (data) => this.Restaurants = data,
      (err) => console.log(err)
    );
  }

  RestaurantSearch(){
    if(this.Search.length > 0){
      this.RestaurantService.getRestaurantsByName(this.Search).subscribe(
        (data) => this.Restaurants = data,
        (err) => console.log(err)
      );
    }
    else{
      this.getAll();
    }
  }

  DeleteRestaurant(id){
    this.RestaurantService.deleteRestaurant(id).subscribe(
      (data) => window.location.reload(),
      (err) => console.log(err)
    );
  }


  ngOnInit() {
    this.getAll();
  }

}
