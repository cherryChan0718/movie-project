import { Component } from '@angular/core';
import { HttpService2 } from '../../service/app.service2';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'movies-detail',
  templateUrl: './moviesdetail.component.html',
  styleUrls: ['./moviesdetail.component.css'],
  providers: [HttpService2]
})
export class MoviesdetailComponent {
  title = 'movie-project';
  constructor(public http:HttpService2, public router:ActivatedRoute, public location:Location){
    
  }

  id:number;
  name:string;
  movie:Object;
  cast:Object
  ngOnInit(){
    this.router.params.subscribe(params=>{
      this.id = params['id'];
      this.name = params['name'];
      this.http.getMovies('https://api.themoviedb.org/3/movie/'+ this.id +'?callback=JSONP_CALLBACK&api_key=',res=>{
        this.movie = res;
      })
      //演员表



      this.http.getMovies('https://api.themoviedb.org/3/movie/'+ this.id +'/credits?callback=JSONP_CALLBACK&api_key=',res=>{
        console.log(res)
        this.cast = res.cast;
      })
    })
    
  }
  goBack():void{
    this.location.back();
  }
}
