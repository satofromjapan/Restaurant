import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'home', component: HomeComponent },
    // { path: 'show/:id', component: ShowComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);
