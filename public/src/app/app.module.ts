import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpService } from'./http.service';
import { routing } from './app.routes';
import { AuthService } from './auth.service';
import { AuthguardService } from './authguard.service';
// import { AUTH_PROVIDERS } from 'angular2-jwt';
//,AUTH_PROVIDERS

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AdminComponent,
    CallbackComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService,AuthService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
