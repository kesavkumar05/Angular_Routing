import { Routes } from '@angular/router';
import { UserComponent } from './admin/user/user.component';
import { PostComponent } from './admin/post/post.component';
import { HomeComponent } from './admin/home/home.component';

export const routes: Routes = [{path : 'user', component : UserComponent},
{path : 'post', component : PostComponent},
{path : 'home', component : HomeComponent}];
