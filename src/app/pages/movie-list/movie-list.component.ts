import { Component } from '@angular/core';
import { ApplicationStore } from 'src/app/store';
import { FetchPopularMovies, SearchMovies, SearchMoreMovies, ClearSearchedMovies } from 'src/app/store/actions';
import { IMoviesState } from 'src/app/types';
import { ObservablePage } from 'src/app/utils/base-pages';

@Component({
	selector: 'app-movie-list',
	templateUrl: './movie-list.component.html'
})
export class MovieListComponent extends ObservablePage {
	/** Movies store */
	moviesState: IMoviesState;

	constructor(private store: ApplicationStore) {
		super();

		this.initialiseMoviesState();
	}

	/**
	 * @description
	 * Subscribe to state observable and dispatch popular movies fetch action if not already.
	 */
	initialiseMoviesState() {
		this.subscriptions.moviesSubscription = this.store.select('movies').subscribe(moviesState => {
			this.moviesState = moviesState;

			const isMoviesStateInitialised = moviesState.initialised;
			if (!isMoviesStateInitialised) {
				this.store.dispatch(new FetchPopularMovies());
			}
		});
	}

	/**
	 * @description
	 * Dispatch an event to fetch more popular movies and append to the list.
	 */
	fetchMorePopularMovies() {
		if (!this.moviesState.isLoading) {
			const nextPage = this.moviesState.popularMoviesPage + 1;
			this.store.dispatch(new FetchPopularMovies(nextPage));
		}
	}

	/**
	 * @description
	 * Dispatch movies search action by keyword.
	 *
	 * @param {string} keywords	Keyword to search by
	 */
	searchMoviesByKeywords(keywords: string) {
		keywords ? this.store.dispatch(new SearchMovies(keywords)) : this.store.dispatch(new ClearSearchedMovies());
	}

	/**
	 * @description
	 * Dispatch an event to fetch more popular movies and append to the list.
	 */
	searchMoreMoviesByKeyword() {
		if (!this.moviesState.isLoading) {
			const nextPage = this.moviesState.searchedMoviesPage + 1;
			this.store.dispatch(new SearchMoreMovies(this.moviesState.keywords, nextPage));
		}
	}
}
