import { Pipe, PipeTransform } from '@angular/core';
import { BASE_IMAGE_URL } from '../constants';

@Pipe({
	name: 'image'
})
export class ImagePipe implements PipeTransform {
	/**
	 * @description
	 * Combine the provided path with the Movie DB base image URL.
	 *
	 * @param {string} path	Image path without the base URL
	 */
	transform(path: string): string {
		return path ? `${BASE_IMAGE_URL}${path}` : null;
	}
}
