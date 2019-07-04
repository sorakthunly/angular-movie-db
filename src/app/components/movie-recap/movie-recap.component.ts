import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-movie-recap',
	templateUrl: './movie-recap.component.html'
})
export class MovieRecapComponent {
	/** Date of the release */
	@Input() releaseDate: string;

	/** Vote average score */
	@Input() score: number;

	/** Title of the movie */
	@Input() title: string;
}
