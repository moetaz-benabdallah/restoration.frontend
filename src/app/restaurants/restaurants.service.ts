import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {

  private baseUrl: String = 'http://localhost:5000';

  constructor (private http: Http) {}

  newRestaurant(restaurant) {
    return this.http.post( this.baseUrl + '/api/restaurants' , restaurant)
    .map((res: Response) => res.toString());
  }

  updateRestaurant(id, restaurant) {
    return this.http.put( this.baseUrl + '/api/restaurants/' + id, restaurant)
    .map((res: Response) => res.toString());
  }

  getRestaurants() {
    return this.http.get( this.baseUrl + '/api/restaurants')
    .map((res: Response) => res.json());
  }

  getRestaurantsByName(name) {
    return this.http.get( this.baseUrl + '/api/restaurants/name/' + name)
    .map((res: Response) => res.json());
  }

  getRestaurant(id) {
    return this.http.get( this.baseUrl + '/api/restaurants/' + id)
    .map((res: Response) => res.json());
  }

  deleteRestaurant(id) {
    return this.http.delete( this.baseUrl + '/api/restaurants/' + id)
    .map((res: Response) => res.toString());
  }

}
