import { IMovies, IMovie } from './movies';

export interface IApplicationState {
	movies: IMoviesState;
}

export interface IPageState {
	error: string;
	isLoading: boolean;
}

export interface IMoviesState extends IPageState {
	initialised: boolean;
	isShowingSearchedMovies: boolean;
	keywords: string;
	selectedMovie: IMovieState;
	popularMovies: IMovies;
	popularMoviesPage: number;
	searchedMovies: IMovies;
	searchedMoviesPage: number;
}

export interface IMovieState extends IPageState {
	movie: IMovie;
}
