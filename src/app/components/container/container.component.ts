import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-container',
	templateUrl: './container.component.html'
})
export class ContainerComponent {
	/** Whether there should be vertical padding */
	@Input() hasVerticalPadding: boolean;
}
