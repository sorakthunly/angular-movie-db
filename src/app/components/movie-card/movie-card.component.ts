import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/types';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
	/** Movie instance to display */
	@Input() movie: IMovie;

	constructor() {}

	ngOnInit() {}
}
