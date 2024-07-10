import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  movieList: any[] = [];

  constructor(
    private _router: Router,
    private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this._getMovies();
  }

  public logout(): void {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  public addMovie(): void {
    this._moviesService.addMovie({});
  }

  private _getMovies(): void {
    this._moviesService.getMovies().subscribe((res:any) => {
      this.movieList = res;
    });
  }
}
