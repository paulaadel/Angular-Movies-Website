import { Component, OnInit } from '@angular/core';
import {MoviesApiService} from '../movies-api.service'
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TVShowsComponent implements OnInit {
showsContainer:any= [];
myPoster:any = "https://image.tmdb.org/t/p/w500/";
  constructor(_MoviesApiService:MoviesApiService) {
    _MoviesApiService.allShowTrending().subscribe(shows=> this.showsContainer=shows.results)
   }

  ngOnInit(): void {
  }

}
