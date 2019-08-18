import { Component,Input } from '@angular/core';


@Component({
  selector: 'movies-card',
  templateUrl: './moviescard.component.html',
  styleUrls: ['./moviescard.component.css'],
})
export class MoviescardComponent {
  @Input() item: Object

}
