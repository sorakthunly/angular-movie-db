import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-scroll-top',
	templateUrl: './scroll-top.component.html',
	styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {
	/** Whether the scroll position is not at the top of the page */
	isScrollPositionNotTop: boolean;

	/**
	 * @description
	 * Listen to scroll event and set the flag whether the scroll position
	 * is not at the top of the page.
	 */
	@HostListener('window:scroll')
	onscroll() {
		this.isScrollPositionNotTop = window.scrollY > window.innerHeight;
	}

	/**
	 * @description
	 * Scroll to top of the page.
	 */
	scrollToTop() {
		const scrollTo = 0;
		const scrollDuration = 1000;
		const element = document.scrollingElement || document.documentElement;
		const start = element.scrollTop;
		const change = scrollTo - start;
		const startDate = +new Date();

		const easeInOutQuad = (currentTime: number, startValue: number, changeInValue: number, duration: number) => {
			currentTime /= duration / 2;
			if (currentTime < 1) {
				return (changeInValue / 2) * currentTime * currentTime + startValue;
			}
			currentTime--;

			return (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue;
		};

		const animateScroll = () => {
			const currentDate = +new Date();
			const currentTime = currentDate - startDate;

			element.scrollTop = easeInOutQuad(currentTime, start, change, scrollDuration);
			if (currentTime < scrollDuration) {
				requestAnimationFrame(animateScroll);
			} else {
				element.scrollTop = scrollTo;
			}
		};

		animateScroll();
	}
}
