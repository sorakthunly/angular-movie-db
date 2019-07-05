import { IMoviesState } from 'src/app/types/states';
import { TMoviesAction, EMoviesAction } from '../actions';

const initialState: IMoviesState = {
	error: null,
	isLoading: false,
	initialised: false,
	keywords: null,
	selectedMovie: {
		error: null,
		isLoading: false,
		movie: null
	},
	popularMovies: null,
	popularMoviesPage: 1,
	searchedMovies: null,
	searchedMoviesPage: 1
};

/**
 * @description
 * Reducer function handling the state of movies module.
 */
export function moviesReducer(state = initialState, action: TMoviesAction): IMoviesState {
	switch (action.type) {
		case EMoviesAction.CLEAR_SEARCHED_MOVIES:
			return { ...state, keywords: null, searchedMovies: null, searchedMoviesPage: 1 };

		case EMoviesAction.FETCH_MOVIE:
			return { ...state, selectedMovie: { ...state.selectedMovie, isLoading: true } };

		case EMoviesAction.FETCH_MOVIE_SUCCESS:
			return { ...state, selectedMovie: { ...state.selectedMovie, isLoading: false, movie: action.movie } };

		case EMoviesAction.FETCH_MOVIE_FAILURE:
			return { ...state, selectedMovie: { ...state.selectedMovie, isLoading: false, error: action.message } };

		case EMoviesAction.FETCH_POPULAR_MOVIES:
			return { ...state, isLoading: true, initialised: true };

		case EMoviesAction.FETCH_POPULAR_MOVIES_SUCCESS:
			const updatedPopularMovies = state.popularMovies
				? state.popularMovies.concat(action.movies.results)
				: action.movies.results;

			return { ...state, isLoading: false, popularMovies: updatedPopularMovies, popularMoviesPage: action.movies.page };

		case EMoviesAction.FETCH_POPULAR_MOVIES_FAILURE:
			return { ...state, isLoading: false, error: action.message };

		case EMoviesAction.SEARCH_MOVIES:
			return { ...state, isLoading: true, keywords: action.keywords };

		case EMoviesAction.SEARCH_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				searchedMovies: action.movies.results,
				searchedMoviesPage: action.movies.page
			};

		case EMoviesAction.SEARCH_MOVIES_FAILURE:
			return { ...state, isLoading: false, error: action.message };

		case EMoviesAction.SEARCH_MORE_MOVIES:
			return { ...state, isLoading: true };

		case EMoviesAction.SEARCH_MORE_MOVIES_SUCCESS:
			const updatedSearchedMovies = state.searchedMovies
				? state.searchedMovies.concat(action.movies.results)
				: action.movies.results;

			return {
				...state,
				isLoading: false,
				searchedMovies: updatedSearchedMovies,
				searchedMoviesPage: action.movies.page
			};

		case EMoviesAction.SEARCH_MORE_MOVIES_FAILURE:
			return { ...state, isLoading: false, error: action.message };

		default:
			return state;
	}
}
