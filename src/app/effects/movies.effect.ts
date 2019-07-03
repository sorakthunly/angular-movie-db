import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../services';
import {
	EMoviesAction,
	FetchMovies,
	FetchMoviesSuccess,
	FetchMoviesFailure,
	FetchMovie,
	FetchMovieSuccess,
	FetchMovieFailure,
	SearchMovies,
	SearchMoviesSuccess,
	SearchMoviesFailure
} from '../store/actions';

@Injectable()
export class MoviesEffect {
	constructor(private actions: Actions, private moviesService: MoviesService) {}

	@Effect()
	searchMovies = this.actions.pipe(
		ofType<SearchMovies>(EMoviesAction.SEARCH_MOVIES),
		switchMap(payload =>
			this.moviesService.searchMoviesByKeyword(payload.keyword, payload.page).pipe(
				switchMap(movies => of(new SearchMoviesSuccess(movies))),
				catchError(err => of(new SearchMoviesFailure(err.error.message)))
			)
		)
	);

	@Effect()
	fetchMovies = this.actions.pipe(
		ofType<FetchMovies>(EMoviesAction.FETCH_MOVIES),
		switchMap(payload =>
			this.moviesService.fetchPopularMovies(payload.page).pipe(
				switchMap(movies => of(new FetchMoviesSuccess(movies))),
				catchError(err => of(new FetchMoviesFailure(err.error.message)))
			)
		)
	);

	@Effect()
	fetchMovie = this.actions.pipe(
		ofType<FetchMovie>(EMoviesAction.FETCH_MOVIE),
		switchMap(payload =>
			this.moviesService.fetchMovie(payload.id).pipe(
				switchMap(movie => of(new FetchMovieSuccess(movie))),
				catchError(err => of(new FetchMovieFailure(err.error.message)))
			)
		)
	);
}
