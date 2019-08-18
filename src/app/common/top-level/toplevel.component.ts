import { Component } from '@angular/core';
import { HttpService2 } from '../../service/app.service2';

@Component({
  selector: 'toplevel',
  templateUrl: './toplevel.component.html',
  styleUrls: ['./toplevel.component.css'],
  providers: [HttpService2]
})
export class ToplevelComponent {
  title = 'movie-project';
  constructor(public http:HttpService2){

  }
  arr:Array<Object>
  ngOnInit(){
    this.http.getMovies('https://api.themoviedb.org/3/movie/top_rated?callback=JSONP_CALLBACK&api_key=',res=>{
      console.log(res)
      this.arr = res.results;
    })
  }
}
