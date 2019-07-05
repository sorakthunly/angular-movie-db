import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/types';
@Component({
	selector: 'app-movie-snapshot',
	templateUrl: './movie-snapshot.component.html',
	styleUrls: ['./movie-snapshot.component.scss']
})
export class MovieSnapshotComponent {
	/** Movie instance to display the information for */
	@Input() movie: IMovie;
}
