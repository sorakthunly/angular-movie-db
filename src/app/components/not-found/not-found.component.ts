import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
	/** The text to display */
	@Input() text: string;
}
