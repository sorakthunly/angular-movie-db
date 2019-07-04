import { Component, Output, EventEmitter } from '@angular/core';
import { isNull } from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
	/** Emits an event when to fire a search call after debounced */
	@Output() search: EventEmitter<string> = new EventEmitter();

	/** Search keyword */
	searchKeywords: string;

	/** Search keyword behaviour subject to debounce call */
	searchKeywords$: BehaviorSubject<string> = new BehaviorSubject(null);

	constructor() {
		this.searchKeywords$
			.pipe(
				debounceTime(400),
				distinctUntilChanged()
			)
			.subscribe(keyword => {
				const isKeywordsNull = isNull(keyword);
				if (!isKeywordsNull) {
					this.search.emit(keyword);
				}
			});
	}
}
