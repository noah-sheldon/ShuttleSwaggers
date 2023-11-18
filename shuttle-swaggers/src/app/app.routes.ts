import { Routes } from '@angular/router';
import { SessionsComponent } from './components/sessions/sessions.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '' , pathMatch:'full', component: HomeComponent},
    {path: 'sessions', component: SessionsComponent},
];
