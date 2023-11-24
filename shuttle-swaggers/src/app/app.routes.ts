import { Routes } from '@angular/router';
import { SessionsComponent } from './components/sessions/sessions.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sessions', component: SessionsComponent},
    {path: '**', component: PageNotFoundComponent}
];
