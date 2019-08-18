import { Component } from '@angular/core';
import { HttpService2 } from '../../service/app.service2';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css'],
  providers: [HttpService2]
})


export class GenresComponent {
  title = 'movie-project';
  constructor (public http:HttpService2,public router:ActivatedRoute) {

  };
  id:number;
  name:string;
  arr:Array<Object>
  ngOnInit(){
    //参数快照 snapshot
    // this.id = this.router.snapshot.params['id'];
    // this.name = this.router.snapshot.params['name'];
    // this.http.getMovies('https://api.themoviedb.org/3/genre/'+ this.id +'/movies?callback=JSONP_CALLBACK&api_key=',res=>{
    //   console.log(res)
    //   this.arr = res.results;
    // })

    // 参数订阅
    this.router.params.subscribe(params=>{
        this.id = params['id'];
        this.name = params['name'];
        this.http.getMovies('https://api.themoviedb.org/3/genre/'+ this.id +'/movies?callback=JSONP_CALLBACK&api_key=',res=>{
            // console.log(res)
            this.arr = res.results;
            console.log(this.arr)
        })
    })
  }
}
