import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {
    constructor(public http:HttpClient) {
        
    }

}