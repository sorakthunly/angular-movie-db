export interface IMovie {
	vote_count: number;
	id: number;
	video: boolean;
	vote_average: number;
	title: string;
	popularity: number;
	poster_path: string;
	original_language: string;
	original_title: string;
	genre_ids: number[];
	backdrop_path: string;
	adult: boolean;
	runtime?: number;
	overview: string;
	release_date: string;
}

export interface IMovies extends Array<IMovie> {}

export interface IMoviesListResponse {
	page: number;
	results: IMovies;
	total_pages: number;
	total_results: number;
}
