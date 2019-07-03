import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies, Movie } from '../models';

/**
 * @description
 * Provide a REST Service to query movies data from the Movie DB API.
 * @see	https://developers.themoviedb.org/3/discover/movie-discover
 */
@Injectable({ providedIn: 'root' })
export class MoviesService {
	/**
	 * @description
	 * Construct the service with dependency injection.
	 */
	constructor(private http: HttpClient) {}

	/**
	 * @description
	 * Query the API for movies by search keyword.
	 *
	 * @param {string} keyword  The keyword string to search news by
	 * @param {number} page	Page number to paginate - defaulted to 1
	 * @returns	Array of movies by keyword applied
	 */
	searchMoviesByKeyword(keyword: string, page: number = 1): Observable<Movies> {
		return this.http.get<Movies>('');
	}

	/**
	 * @description
	 * Query the API for movies sorted by popularity in descending order.
	 *
	 * @param {number?} page	Page number to paginate - defaulted to 1
	 * @returns	Array of popular movies
	 */
	fetchPopularMovies(page: number = 1): Observable<Movies> {
		return this.http.get<Movies>('');
	}

	/**
	 * @description
	 * Query the API for a movie instance by unique identification.
	 *
	 * @param {string} id	Unique identification of the movie instance
	 * @returns An instance of movie
	 */
	fetchMovie(id: string): Observable<Movie> {
		return this.http.get<Movie>('');
	}
}
