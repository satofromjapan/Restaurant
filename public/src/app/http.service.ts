import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// import { AuthHttp } from 'angular2-jwt';
import "rxjs/Rx"

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  // Get all menu items
  retrieveUsers() {
    return this._http.get('/users').map(data=>data.json()).toPromise()
  }

  // Get all of certain category
  retrieveCategory(category) {
    console.log("http service", category)
    return this._http.get('/menu/'+category).map(data=>data.json()).toPromise()
  }

  // Create a new menu item
  newMenu(menu, creator){
    console.log('httpservice:', menu)
    console.log('httpservice:',creator)
    menu.createdBy = creator
    return this._http.post('/newmenu/',menu).map(data=>data.json()).toPromise()
  }

  // Create a new user
  newUser(user){
    console.log('httpservice:', user)
    return this._http.post('/newuser/',user).map(data=>data.json()).toPromise()
  }

  // edit&update a product
  updateMenu(menu,id){
  console.log('update menu')
  return this._http.post('/editmenu/'+id,menu).map(data=>data.json()).toPromise()
  }
}
