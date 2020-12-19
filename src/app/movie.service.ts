import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { movie } from './movie-model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl: string = 'https://www.omdbapi.com/?s=coach&apikey=a4d98298';

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<movie> {
    return this.http.get<movie>(this.moviesUrl);
  }

}
