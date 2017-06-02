import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpService } from '../http.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

profile: any;
users =null;

  constructor(public auth: AuthService,private _httpService: HttpService,private _router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;

        console.log(this.profile.nickname);
      });
    }
  }

}

