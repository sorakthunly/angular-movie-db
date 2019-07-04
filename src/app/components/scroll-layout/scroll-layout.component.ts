import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
	selector: 'app-scroll-layout',
	templateUrl: './scroll-layout.component.html',
	styleUrls: ['./scroll-layout.component.scss']
})
export class ScrollLayoutComponent {
	/** Event emitted when the scroll is at bottom of the page */
	@Output() scrollAtBottom: EventEmitter<void> = new EventEmitter();

	/**
	 * @description
	 * Listen to scroll event to see if scroll is at bottom of the scroll
	 */
	@HostListener('window:scroll', [])
	checkScrollAtBottom() {
		const scrollAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

		if (scrollAtBottom) {
			this.scrollAtBottom.emit();
		}
	}
}
