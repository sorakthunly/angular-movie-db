import { IMoviesState } from 'src/app/types/states';
import { TMoviesAction, EMoviesAction } from '../actions';

const initialState: IMoviesState = {
	error: null,
	isLoading: false,
	movies: null
};

/**
 * @description
 * Reducer function handling the state of movies module.
 */
export function moviesReducer(state = initialState, action: TMoviesAction): IMoviesState {
	switch (action.type) {
		case EMoviesAction.FETCH_MOVIE:
			return { ...state };

		case EMoviesAction.FETCH_MOVIE_SUCCESS:
			return { ...state };

		case EMoviesAction.FETCH_MOVIE_FAILURE:
			return { ...state };

		case EMoviesAction.FETCH_MOVIES:
			return { ...state };

		case EMoviesAction.FETCH_MOVIES_SUCCESS:
			return { ...state };

		case EMoviesAction.FETCH_MOVIES_FAILURE:
			return { ...state };

		case EMoviesAction.SEARCH_MOVIES:
			return { ...state };

		case EMoviesAction.SEARCH_MOVIES_SUCCESS:
			return { ...state };

		case EMoviesAction.SEARCH_MOVIES_FAILURE:
			return { ...state };

		default:
			return state;
	}
}
