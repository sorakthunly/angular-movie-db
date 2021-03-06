import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../services';
import {
	EMoviesAction,
	FetchPopularMovies,
	FetchPopularMoviesSuccess,
	FetchPopularMoviesFailure,
	FetchMovie,
	FetchMovieSuccess,
	FetchMovieFailure,
	SearchMovies,
	SearchMoviesSuccess,
	SearchMoviesFailure,
	SearchMoreMovies,
	SearchMoreMoviesSuccess,
	SearchMoreMoviesFailure
} from '../store/actions';

@Injectable()
export class MoviesEffect {
	constructor(private actions: Actions, private moviesService: MoviesService) {}

	@Effect()
	searchMovies = this.actions.pipe(
		ofType<SearchMovies>(EMoviesAction.SEARCH_MOVIES),
		switchMap(payload =>
			this.moviesService.searchMoviesByKeyword(payload.keywords).pipe(
				switchMap(response => of(new SearchMoviesSuccess(response))),
				catchError(err => of(new SearchMoviesFailure(err.error.message)))
			)
		)
	);

	@Effect()
	searchMoreMovies = this.actions.pipe(
		ofType<SearchMoreMovies>(EMoviesAction.SEARCH_MORE_MOVIES),
		switchMap(payload =>
			this.moviesService.searchMoviesByKeyword(payload.keywords, payload.page).pipe(
				switchMap(response => of(new SearchMoreMoviesSuccess(response))),
				catchError(err => of(new SearchMoreMoviesFailure(err.error.message)))
			)
		)
	);

	@Effect()
	fetchMovies = this.actions.pipe(
		ofType<FetchPopularMovies>(EMoviesAction.FETCH_POPULAR_MOVIES),
		switchMap(payload =>
			this.moviesService.fetchPopularMovies(payload.page).pipe(
				switchMap(response => of(new FetchPopularMoviesSuccess(response))),
				catchError(err => of(new FetchPopularMoviesFailure(err.error.message)))
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
