import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISubscriptions } from 'src/app/types';

/**
 * @description
 * A base page to extend from for auto observable unsubscriptions.
 */
export class ObservablePage implements OnDestroy {
	/** List of subscriptions */
	subscriptions: ISubscriptions;

	constructor() {
		this.subscriptions = {};
	}

	/**
	 * @description
	 * Automatically unsubscribe from all subscription on page destroy.
	 */
	ngOnDestroy() {
		const subscriptionKeys = Object.keys(this.subscriptions);
		subscriptionKeys.forEach(key => this.subscriptions[key].unsubscribe());
	}
}
