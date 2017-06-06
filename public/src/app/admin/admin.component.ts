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
user = {user_sub : ""};
error =null;
validuser = false;
noPipe = null;

  constructor(public auth: AuthService,private _httpService: HttpService,private _router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {
   
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.noPipe= this.profile.sub.replace(/[|]/, '')
        console.log("After replacing",this.noPipe);
      
        console.log("Hello")
        this._httpService.getUser(this.noPipe)
          .then( data => { 
             console.log("length: ",data.user.length);
                 if(data.user.length>0){
                     console.log(data.user[0].user_sub);
                      if(data.user[0].user_sub == this.noPipe){
                         console.log(data.user);
                         this.validuser= true;
                        }
                 }
                else if (data.user.length == 0){
                         this.error = "This page is only for admin" //not admin
                         this._router.navigate(['/']);
                       }
                       
                  // else{
                  //     this.error = "Error in receiving data from api" //due to incorrect id
                  //     this._router.navigate(['/']);
                  //     }
                   })
        .catch( err => { console.log(err); })
   
   
   
    //     this.user.user_sub = this.noPipe;
    //   this._httpService.createUser(this.user)
    //  .then((data) =>{
    //    if(data.message == "success"){
    //      this.error =null //to reset the value from previous error
    //     }
    //      else {
    //        this.error = "Unable to create a user";
    //      } 
       
    //  })
    //   .catch( err => { console.log(err); })


        
      });//getProfile ends

      
        
      }//ng ends
      
    
  }




