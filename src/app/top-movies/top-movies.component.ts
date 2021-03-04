import { Component, OnInit } from '@angular/core';
import {MoviesApiService} from '../movies-api.service'
@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit {
allMovies:any = [];
myPoster:any = "https://image.tmdb.org/t/p/w500/";
  constructor(_MoviesApiService:MoviesApiService) {
    _MoviesApiService.allMoviesTrending().subscribe(all => this.allMovies = all.results )
   }

  ngOnInit(): void {
  }

}

