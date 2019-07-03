import { Action } from '@ngrx/store';
import { Movies, Movie } from 'src/app/models';

export enum EMoviesAction {
	FETCH_MOVIE = 'FETCH_MOVIE',
	FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
	FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
	FETCH_MOVIES = 'FETCH_MOVIES',
	FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
	FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE',
	SEARCH_MOVIES = 'SEARCH_MOVIES',
	SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
	SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'
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
	constructor(public id: string) {}
}

/**
 * @description
 * Action to dispatch when the movie fetch returns successful response.
 */
export class FetchMovieSuccess implements Action {
	readonly type = EMoviesAction.FETCH_MOVIE_SUCCESS;

	/**
	 * @param {Movie} movie	Movie instance successfully fetched
	 */
	constructor(public movie: Movie) {}
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
export class FetchMovies implements Action {
	readonly type = EMoviesAction.FETCH_MOVIES;

	/**
	 * @param {number} page	Page number to paginate - defaulted to 1
	 */
	constructor(public page: number = 1) {}
}

/**
 * @description
 * Action to dispatch when the movies fetch returns successful response.
 */
export class FetchMoviesSuccess implements Action {
	readonly type = EMoviesAction.FETCH_MOVIES_SUCCESS;

	/**
	 * @param {Movies} movies	Array of movies successfully fetched
	 */
	constructor(public movies: Movies) {}
}

/**
 * @description
 * Action to dispatch when the movies fetch returns failure response.
 */
export class FetchMoviesFailure implements Action {
	readonly type = EMoviesAction.FETCH_MOVIES_FAILURE;

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
	 * @param {string} keyword	Keyword to search by
	 * @param {number} page	Page number to paginate - defaulted to 1
	 */
	constructor(public keyword: string, public page: number = 1) {}
}

/**
 * @description
 * Action to dispatch when the movies search returns successful response.
 */
export class SearchMoviesSuccess implements Action {
	readonly type = EMoviesAction.SEARCH_MOVIES_SUCCESS;

	/**
	 * @param {Movies} movies	Array of movies successfully fetched
	 */
	constructor(public movies: Movies) {}
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

export type TMoviesAction =
	| FetchMovie
	| FetchMovieSuccess
	| FetchMovieFailure
	| FetchMovies
	| FetchMoviesSuccess
	| FetchMoviesFailure
	| SearchMovies
	| SearchMoviesSuccess
	| SearchMoviesFailure;
