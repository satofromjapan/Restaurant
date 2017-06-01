import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  allmenu;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // this._httpService.retrieveData()
    // .then(data => {this.allmenu = data;
    // console.log(data)})
    // .catch( err => {console.log(err);})
  }

}
