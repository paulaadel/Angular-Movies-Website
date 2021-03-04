import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TVShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'Home' , component:LandingPageComponent},
  {path: "" , redirectTo:'/Home', pathMatch:"full"},
  {path:'Trending_Movies', component:TopMoviesComponent},
  {path:'TV_Shows', component:TVShowsComponent},
  {path:'Famous_Actors', component:ActorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
