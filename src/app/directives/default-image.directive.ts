import { Directive, Input } from '@angular/core';

@Directive({
	selector: '[appDefaultImage]',
	host: {
		'[src]': 'checkImageSource(src)',
		'(error)': 'handleSourceError()'
	}
})
export class DefaultImageDirective {
	/** Image source attribute (overriding) */
	@Input() src: string;

	/** Default image URL to display */
	defaultImage = 'assets/images/movie-default-poster.webp';

	/**
	 * @description
	 * Handle any image source error.
	 */
	handleSourceError() {
		this.src = this.defaultImage;
	}

	/**
	 * @description
	 * Check that there's a source, if not populate default image.
	 */
	checkImageSource(src: string) {
		return src || this.defaultImage;
	}
}
