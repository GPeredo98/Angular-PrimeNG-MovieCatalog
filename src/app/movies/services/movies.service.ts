import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/core/indexedDB/db';
import { env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getMovies() {
    return liveQuery(() => db.movies.toArray());
  }

  public addMovie(movie: any) {
    return db.movies.add(movie);
  }

  public updateMovie(movie: any) {
    return db.movies.update(movie, movie.id);
  }

  public deleteMovie(id: number) {
    return db.movies.delete(id);
  }

}
