import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.auto';
import { BASE_API_URL } from '../constants';
import { IMovie, IMoviesListResponse } from '../types';

/**
 * @description
 * Provide a REST Service to query movies data from the Movie DB API.
 * @see	https://developers.themoviedb.org/3/discover/movie-discover
 */
@Injectable({ providedIn: 'root' })
export class MoviesService {
	/** API Key for the Movie DB */
	private readonly apiKey = environment.apiKey;

	/** Base API URL */
	private readonly baseUrl = BASE_API_URL;

	/**
	 * @description
	 * Construct the service with dependency injection.
	 */
	constructor(private http: HttpClient) {}

	/**
	 * @description
	 * Query the API for movies by search keyword.
	 *
	 * @param {string} keywords  The keyword string to search news by
	 * @param {number} page	Page number to paginate - defaulted to 1
	 * @returns	Array of movies by keyword applied
	 */
	searchMoviesByKeyword(keywords: string, page: number = 1): Observable<IMoviesListResponse> {
		return this.http.get<IMoviesListResponse>(
			`${this.baseUrl}/search/movie?page=${page}&query=${keywords}&api_key=${this.apiKey}`
		);
	}

	/**
	 * @description
	 * Query the API for movies sorted by popularity in descending order.
	 *
	 * @param {number?} page	Page number to paginate - defaulted to 1
	 * @returns	Array of popular movies
	 */
	fetchPopularMovies(page: number = 1): Observable<IMoviesListResponse> {
		return this.http.get<IMoviesListResponse>(
			`${this.baseUrl}/discover/movie?page=${page}&sort_by=popularity.desc&api_key=${this.apiKey}`
		);
	}

	/**
	 * @description
	 * Query the API for a movie instance by unique identification.
	 *
	 * @param {number} id	Unique identification of the movie instance
	 * @returns An instance of movie
	 */
	fetchMovie(id: number): Observable<IMovie> {
		return this.http.get<IMovie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
	}
}
