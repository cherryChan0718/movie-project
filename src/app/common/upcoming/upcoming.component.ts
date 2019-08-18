import { Component } from '@angular/core';
import { HttpService2 } from '../../service/app.service2';

@Component({
  selector: 'upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
  providers: [HttpService2]
})
export class UpcomingComponent {
  title = 'movie-project';
  constructor(public http:HttpService2){

  }
  arr:Array<Object>
  ngOnInit(){
    this.http.getMovies('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK&api_key=',res=>{
      this.arr = res.results;
    })
  }
}
