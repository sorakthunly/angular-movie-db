import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'app-scroll-layout',
	templateUrl: './scroll-layout.component.html'
})
export class ScrollLayoutComponent {
	/** Event emitted when the scroll approaches the bottom of the page */
	@Output() scrollApproachesBottom: EventEmitter<void> = new EventEmitter();

	/**
	 * @description
	 * Listen to scroll event to see if scroll is at bottom of the scroll
	 */
	@HostListener('window:scroll', [])
	checkScrollApproachesBottom() {
		const scrollApproachesBottom = document.body.offsetHeight - (window.innerHeight + window.scrollY) < 150;
		if (scrollApproachesBottom) {
			this.scrollApproachesBottom.emit();
		}
	}
}
