import { Pipe, PipeTransform } from '@angular/core';
import { roundDown } from '../utils';

@Pipe({
	name: 'movieDuration'
})
export class MovieDurationPipe implements PipeTransform {
	/**
	 * @description
	 * Transform integer movie runtime into user-friendly text.
	 */
	transform(runtime: number): string {
		const hours = roundDown(runtime / 60);
		const minutes = runtime % 60;
		const duration = `${hours}h ${minutes} min`;

		return duration;
	}
}
