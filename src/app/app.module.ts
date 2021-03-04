import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TVShowsComponent } from './tv-shows/tv-shows.component';
import { ActorsComponent } from './actors/actors.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMoviesComponent,
    NavBarComponent,
    LandingPageComponent,
    TVShowsComponent,
    ActorsComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
