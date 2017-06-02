import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './create/create.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthguardService } from './authguard.service';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home',
    pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'home', component: HomeComponent },
    { path: 'create', component: CreateComponent },
    {path: 'callback', component: CallbackComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthguardService] },
];


export const routing = RouterModule.forRoot(APP_ROUTES);
