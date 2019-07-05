import { Location } from '@angular/common';
import { Component, HostListener, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApplicationStore } from 'src/app/store';
import { FetchMovie } from 'src/app/store/actions';
import { IMovieState } from 'src/app/types';
import { ObservablePage } from 'src/app/utils/base-pages';

@Component({
	selector: 'app-movie-view',
	templateUrl: './movie-view.component.html'
})
export class MovieViewComponent extends ObservablePage {
	/** Movie instance to display */
	movieDetail: IMovieState;

	/** Movies store subscription */
	moviesStoreSubscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private store: ApplicationStore,
		private location: Location,
		private changeDetectionRef: ChangeDetectorRef
	) {
		super();

		this.fetchMovieByRouteParams();
		this.subscribeToMoviesStore();
	}

	/**
	 * @description
	 * Run change detection on window resize event so that the image
	 * pipe can pick up the media query and update the base URL according
	 * to get the right quality image for display.
	 */
	@HostListener('window:resize', [])
	onWindowResize() {
		this.changeDetectionRef.detectChanges();
	}

	/**
	 * @description
	 * Fetch the movie instance by ID.
	 */
	fetchMovieByRouteParams() {
		this.route.params.subscribe(params => {
			const id = Number(params.id);
			this.store.dispatch(new FetchMovie(id));
		});
	}

	/**
	 * @description
	 * Subscribe to the movie store observable.
	 */
	subscribeToMoviesStore() {
		this.subscriptions.moviesStore = this.store.select('movies').subscribe(movies => {
			this.movieDetail = movies.selectedMovie;
		});
	}

	/**
	 * @description
	 * Go to previous page.
	 */
	goBackPage() {
		this.location.back();
	}
}
