import { Component, OnInit } from '@angular/core';
import {MoviesApiService} from '../movies-api.service'
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
peopleContainer:any=[];
myPoster:any = "https://image.tmdb.org/t/p/w500/";
  constructor(_MoviesApiService:MoviesApiService) {
    _MoviesApiService.allPeopleTrending().subscribe(people=> this.peopleContainer=people.results);
   }

  ngOnInit(): void {
  }

}
