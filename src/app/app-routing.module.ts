import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './common//upcoming/upcoming.component';
import { PopularComponent } from './common/popular/popular.component';
import { GenresComponent } from './common/genres/genres.component';
import { ToplevelComponent } from './common/top-level/toplevel.component';
import { MoviesdetailComponent } from './common/movies-detail/moviesdetail.component';
import { ActorsdetailComponent } from './common/actors-detail/actorsdetail.component'


export const appRoutes: Routes = [
  {
    path:'', 
    component: UpcomingComponent, 
    pathMatch:'full'
  },
  {
    path:'upcoming', 
    component: UpcomingComponent
  },
  {
    path:'popular/series', 
    component: PopularComponent
  },
  {
    path:'toplevel', 
    component: ToplevelComponent
  },
  {
    path:'genres/:id/:name', 
    component: GenresComponent
  },
  {
    path:'movie/:id', 
    component: MoviesdetailComponent
  },
  {
    path:'actor/:id', 
    component: ActorsdetailComponent
  }
];


