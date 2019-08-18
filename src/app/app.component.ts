import { Component } from '@angular/core';
import { HttpService2 } from './service/app.service2'

interface Type  {
  id:number;
  name:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService2]
})


export class AppComponent {
  title = 'movie-project';
  constructor (public http:HttpService2) {

  }
  genres:Array<Object>
  ngOnInit(){
    this.http.getMovies('https://api.themoviedb.org/3/genre/movie/list?callback=JSONP_CALLBACK&api_key=',res=>{
      this.genres = res.genres;
    })
  }
}
