import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/types';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
	/** Movie instance to display */
	@Input() movie: IMovie;
}
