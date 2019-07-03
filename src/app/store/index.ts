import { Injectable } from '@angular/core';
import { Store, ActionReducerMap } from '@ngrx/store';
import { IApplicationState } from '../types/states';
import { moviesReducer } from './reducers';

@Injectable({ providedIn: 'root' })
export class ApplicationStore extends Store<IApplicationState> {}

export const APPLICATION_REDUCERS: ActionReducerMap<IApplicationState> = {
	movies: moviesReducer
};
