import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
moviesUrl="https://api.themoviedb.org/3/trending/movie/day?api_key=927785371daa8f63a28eb33e4253aecc";
showsUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=927785371daa8f63a28eb33e4253aecc";
peopleUrl = "https://api.themoviedb.org/3/trending/person/day?api_key=927785371daa8f63a28eb33e4253aecc";
  constructor(public _HttpClient:HttpClient) { }

  allMoviesTrending():Observable<any>
  {
    return this._HttpClient.get(this.moviesUrl);
  }
allShowTrending():Observable<any>
{
  return this._HttpClient.get(this.showsUrl)
}
allPeopleTrending():Observable<any>
{
  return this._HttpClient.get(this.peopleUrl)
}
}
