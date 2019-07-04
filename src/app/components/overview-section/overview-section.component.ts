import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-overview-section',
	templateUrl: './overview-section.component.html'
})
export class OverviewSectionComponent {
	/** Text to display */
	@Input() text: string;
}
