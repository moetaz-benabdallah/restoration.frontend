import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../Restaurant';


@Component({
  selector: 'app-restaurants.new',
  templateUrl: './restaurants.new.component.html',
  styleUrls: ['./restaurants.new.component.css'],
  providers: [RestaurantService, Restaurant]
})
export class RestaurantsNewComponent implements OnInit {

  private Resto : Restaurant;

  constructor(private Restaurant: Restaurant, private RestaurantService: RestaurantService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  AddRestaurant(){
      this.RestaurantService.newRestaurant(this.Restaurant).subscribe(data => {
          this.router.navigate(['/restaurants']);
      });
  }

  Cancel() {
    this.Restaurant = new Restaurant();
    this.router.navigate(['/restaurants']);
  }
}
