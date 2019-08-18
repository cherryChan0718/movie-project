import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService2 {
    public api_key:string;
    constructor(public _jsonp:Jsonp) {
        this._jsonp = _jsonp
        this.api_key = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    }
    getMovies(url:string,callback:Function){
        this._jsonp.get(url + this.api_key)
        .map(res=>res.json())
        .subscribe(data=>{
            callback(data)
        },error=>{
            console.log(error)
        })
    }

}