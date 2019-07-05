import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'userScore'
})
export class UserScorePipe implements PipeTransform {
	/**
	 * @description
	 * Convert 1-10 score to percentage display.
	 *
	 * @param {number} score Vote arrange 0 - 10.
	 */
	transform(score: number): any {
		return `${Math.round(score * 10)}%`;
	}
}
