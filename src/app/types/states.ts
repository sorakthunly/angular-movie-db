import { Movies } from '../models';

export interface IApplicationState {
	movies: IMoviesState;
}

export interface IMoviesState {
	error: string;
	isLoading: boolean;
	movies: Movies;
}
