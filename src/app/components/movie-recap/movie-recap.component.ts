import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-movie-recap',
	templateUrl: './movie-recap.component.html'
})
export class MovieRecapComponent {
	/** Duration of the movie */
	@Input() duration: number;

	/** Date of the release */
	@Input() releaseDate: string;

	/** Vote average score */
	@Input() score: number;

	/** Title of the movie */
	@Input() title: string;
}
