import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePipe, StringDatePipe } from 'src/app/pipes';
import { IMovie } from 'src/app/types';
import { MovieCardComponent } from './movie-card.component';

const MOCK_MOVIE: IMovie = {
	vote_count: 350,
	id: 429617,
	video: false,
	vote_average: 7.8,
	title: 'Spider-Man: Far from Home',
	popularity: 514.252,
	poster_path: '/2cAc4qH9Uh2NtSujJ90fIAMrw7T.jpg',
	original_language: 'en',
	original_title: 'Spider-Man: Far from Home',
	genre_ids: [28, 12, 878],
	backdrop_path: '/dihW2yTsvQlust7mSuAqJDtqW7k.jpg',
	adult: false,
	overview:
		'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
	release_date: '2019-06-28'
};

describe('MovieCardComponent', () => {
	let component: MovieCardComponent;
	let fixture: ComponentFixture<MovieCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MovieCardComponent, ImagePipe, StringDatePipe],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieCardComponent);
		component = fixture.componentInstance;
		component.movie = MOCK_MOVIE;
		fixture.detectChanges();
	});

	it('should render app-user-score element correctly', () => {
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		const appUserStore = compiled.querySelector('app-user-score');
		expect(appUserStore).toBeTruthy();
		expect(appUserStore['score']).toBeTruthy();
	});

	it('should render the movie card image correctly', () => {
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		const movieCardImage = compiled.querySelector('img.movie-card-image');
		expect(movieCardImage).toBeTruthy();
		expect(movieCardImage['src']).toContain(component.movie.poster_path);
	});

	it('should render the movie card title correctly', () => {
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		const movieCardTitle = compiled.querySelector('p.movie-card-title');
		expect(movieCardTitle).toBeTruthy();
		expect(movieCardTitle.textContent).toContain(component.movie.original_title);
	});

	it('should render the movie card date correctly', () => {
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		const movieCardDate = compiled.querySelector('p.movie-card-date');
		expect(movieCardDate).toBeTruthy();

		const expectedDate = new StringDatePipe().transform(component.movie.release_date);
		expect(movieCardDate.textContent).toContain(expectedDate);
	});
});
