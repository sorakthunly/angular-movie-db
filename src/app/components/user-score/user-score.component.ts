import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-user-score',
	templateUrl: './user-score.component.html',
	styleUrls: ['./user-score.component.scss']
})
export class UserScoreComponent {
	/** Score to display */
	@Input() score: number;
}
