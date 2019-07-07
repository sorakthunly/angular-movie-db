import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IMovies } from 'src/app/types';

@Component({
	selector: 'app-movies-container',
	templateUrl: './movies-container.component.html'
})
export class MoviesContainerComponent {
	/** Whether the list is loading */
	@Input() isLoading: boolean;

	/** Array to movies to display */
	@Input() movies: IMovies;

	/** Not found text to display */
	@Input() notFoundText = 'Unfortunately, we could not find any results matching your query.';

	/** Title of the containers */
	@Input() title: string;

	/** Emits an event when scroll is at bottom of the page */
	@Output() scrollApproachesBottom: EventEmitter<void> = new EventEmitter();

	/**
	 * @description
	 * Whether to show not found text
	 */
	get isShowingNotFoundText(): boolean {
		return !this.isLoading && this.movies && !this.movies.length;
	}
}
