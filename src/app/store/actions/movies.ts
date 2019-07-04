import { Action } from '@ngrx/store';
import { IMovie, IMoviesListResponse } from 'src/app/types';

export enum EMoviesAction {
	CLEAR_SEARCHED_MOVIES = 'CLEAR_SEARCHED_MOVIES',
	FETCH_MOVIE = 'FETCH_MOVIE',
	FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
	FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
	FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES',
	FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS',
	FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE',
	SEARCH_MOVIES = 'SEARCH_MOVIES',
	SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
	SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE',
	SEARCH_MORE_MOVIES = 'SEARCH_MORE_MOVIES',
	SEARCH_MORE_MOVIES_SUCCESS = 'SEARCH_MORE_MOVIES_SUCCESS',
	SEARCH_MORE_MOVIES_FAILURE = 'SEARCH_MORE_MOVIES_FAILURE'
}

/**
 * @description
 * Action to clear searched movies from store.
 */
export class ClearSearchedMovies implements Action {
	readonly type = EMoviesAction.CLEAR_SEARCHED_MOVIES;
}

/**
 * @description
 * Action to dispatch when fetching a movie.
 */
export class FetchMovie implements Action {
	readonly type = EMoviesAction.FETCH_MOVIE;

	/**
	 * @param {string} id	Unique identificaiton of a movie instance
	 */
	constructor(public id: number) {}
}

/**
 * @description
 * Action to dispatch when the movie fetch returns successful response.
 */
export class FetchMovieSuccess implements Action {
	readonly type = EMoviesAction.FETCH_MOVIE_SUCCESS;

	/**
	 * @param {IMovie} movie	Movie instance successfully fetched
	 */
	constructor(public movie: IMovie) {}
}

/**
 * @description
 * Action to dispatch when the movie fetch returns failure response.
 */
export class FetchMovieFailure implements Action {
	readonly type = EMoviesAction.FETCH_MOVIE_FAILURE;

	/**
	 * @param {string} message	Error message to display
	 */
	constructor(public message: string) {}
}

/**
 * @description
 * Action to dispatch when fetching movies.
 */
export class FetchPopularMovies implements Action {
	readonly type = EMoviesAction.FETCH_POPULAR_MOVIES;

	/**
	 * @param {number} page	Page number to paginate - defaulted to 1
	 */
	constructor(public page: number = 1) {}
}

/**
 * @description
 * Action to dispatch when the movies fetch returns successful response.
 */
export class FetchPopularMoviesSuccess implements Action {
	readonly type = EMoviesAction.FETCH_POPULAR_MOVIES_SUCCESS;

	/**
	 * @param {IMovies} movies	Array of movies successfully fetched
	 */
	constructor(public movies: IMoviesListResponse) {}
}

/**
 * @description
 * Action to dispatch when the movies fetch returns failure response.
 */
export class FetchPopularMoviesFailure implements Action {
	readonly type = EMoviesAction.FETCH_POPULAR_MOVIES_FAILURE;

	/**
	 * @param {string} message	Error message to display
	 */
	constructor(public message: string) {}
}

/**
 * @description
 * Action to dispatch when searching movies.
 */
export class SearchMovies implements Action {
	readonly type = EMoviesAction.SEARCH_MOVIES;

	/**
	 * @param {string} keywords	Keyword to search by
	 * @param {number} page	Page number to paginate - defaulted to 1
	 */
	constructor(public keywords: string) {}
}

/**
 * @description
 * Action to dispatch when the movies search returns successful response.
 */
export class SearchMoviesSuccess implements Action {
	readonly type = EMoviesAction.SEARCH_MOVIES_SUCCESS;

	/**
	 * @param {IMovies} movies	Array of movies successfully fetched
	 */
	constructor(public movies: IMoviesListResponse) {}
}

/**
 * @description
 * Action to dispatch when the movies search returns failure response.
 */
export class SearchMoviesFailure implements Action {
	readonly type = EMoviesAction.SEARCH_MOVIES_FAILURE;

	/**
	 * @param {string} message	Error message to display
	 */
	constructor(public message: string) {}
}

/**
 * @description
 * Action to dispatch when searching more movies.
 */
export class SearchMoreMovies implements Action {
	readonly type = EMoviesAction.SEARCH_MORE_MOVIES;

	/**
	 * @param {string} keywords	Keyword to search by
	 * @param {number} page	Page number to paginate - defaulted to 1
	 */
	constructor(public keywords: string, public page: number) {}
}

/**
 * @description
 * Action to dispatch when more movies search returns successful response.
 */
export class SearchMoreMoviesSuccess implements Action {
	readonly type = EMoviesAction.SEARCH_MORE_MOVIES_SUCCESS;

	/**
	 * @param {IMovies} movies	Array of movies successfully fetched
	 */
	constructor(public movies: IMoviesListResponse) {}
}

/**
 * @description
 * Action to dispatch when more movies search returns failure response.
 */
export class SearchMoreMoviesFailure implements Action {
	readonly type = EMoviesAction.SEARCH_MORE_MOVIES_FAILURE;

	/**
	 * @param {string} message	Error message to display
	 */
	constructor(public message: string) {}
}

export type TMoviesAction =
	| ClearSearchedMovies
	| FetchMovie
	| FetchMovieSuccess
	| FetchMovieFailure
	| FetchPopularMovies
	| FetchPopularMoviesSuccess
	| FetchPopularMoviesFailure
	| SearchMovies
	| SearchMoviesSuccess
	| SearchMoviesFailure
	| SearchMoreMovies
	| SearchMoreMoviesSuccess
	| SearchMoreMoviesFailure;
