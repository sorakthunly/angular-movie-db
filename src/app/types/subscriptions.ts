import { Subscription } from 'rxjs';

export interface ISubscriptions {
	[key: string]: Subscription;
}
