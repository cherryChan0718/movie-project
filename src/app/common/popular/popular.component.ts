import { Component } from '@angular/core';
import { HttpService2 } from '../../service/app.service2';

@Component({
  selector: 'popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [HttpService2]
})
export class PopularComponent {
  title = 'movie-project';
  constructor(public http:HttpService2){

  }
  arr:Array<Object>
  ngOnInit(){
    this.http.getMovies('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&api_key=',res=>{
      this.arr = res.results;
    })
  }
}
