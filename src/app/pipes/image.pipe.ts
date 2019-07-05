import { Pipe, PipeTransform } from '@angular/core';
import { BASE_IMAGE_RESIZED_URL, BASE_IMAGE_ORIGINAL_URL } from '../constants';

/**
 * @description
 * Using impure pipe can be taxing but it needs to dynamically run on change detection
 * to update the base URL of the image path to get the right quality image.
 */
@Pipe({
	name: 'image',
	pure: false
})
export class ImagePipe implements PipeTransform {
	/**
	 *
	 * @description
	 * Combine the provided path with the Movie DB base image URL.
	 *
	 * @param {string} path	Image path without the base URL
	 */
	transform(path: string, isResponsive?: boolean): string {
		const isMinWidth500px = window.matchMedia('(min-width: 500px)').matches;
		const baseImageUrl = isResponsive && isMinWidth500px ? BASE_IMAGE_ORIGINAL_URL : BASE_IMAGE_RESIZED_URL;

		return path ? `${baseImageUrl}${path}` : null;
	}
}
