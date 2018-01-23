import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  private baseUrl: String = 'http://localhost:5000';

  constructor (private http: Http) {}

  newMenu(menu) {
    return this.http.post( this.baseUrl + '/api/menus' , menu)
    .map((res: Response) => res.toString());
  }

  getMenus() {
    return this.http.get( this.baseUrl + '/api/menus')
    .map((res: Response) => res.json());
  }

  getMenu(id) {
    return this.http.get( this.baseUrl + '/api/menus/' + id)
    .map((res: Response) => res.json());
  }

  deleteMenu(id) {
    return this.http.delete( this.baseUrl + '/api/menus/' + id)
    .map((res: Response) => res.toString());
  }

  updateMenu(id, menu) {
    return this.http.put( this.baseUrl + '/api/menus/' + id, menu)
    .map((res: Response) => res.toString());
  }

}
