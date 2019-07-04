import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
	name: 'stringDate'
})
export class StringDatePipe implements PipeTransform {
	/**
	 * @description
	 * Format a string date into easily readable full month/year.
	 *
	 * @param {string} date	Date in `yyyy-mm-dd`
	 * @returns Date in `YYYY MM`
	 */
	transform(date: string, formatter?: string): string {
		const formattedDate = format(new Date(date), formatter || 'MMMM YYYY');

		return formattedDate;
	}
}
