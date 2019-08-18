import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { appRoutes } from './app-routing.module';
import { UpcomingComponent } from './common/upcoming/upcoming.component';
import { PopularComponent } from './common/popular/popular.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonpModule } from '@angular/http';
import { GenresComponent } from './common/genres/genres.component'
import { ToplevelComponent } from './common/top-level/toplevel.component'
import { MoviesdetailComponent } from './common/movies-detail/moviesdetail.component'
import { MoviescardComponent } from './common/movies-card/moviescard.component'
import {ActorsdetailComponent } from './common/actors-detail/actorsdetail.component'

@NgModule({
  declarations: [
    AppComponent,
    UpcomingComponent,
    PopularComponent,
    GenresComponent,
    ToplevelComponent,
    MoviesdetailComponent,
    MoviescardComponent,
    ActorsdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
