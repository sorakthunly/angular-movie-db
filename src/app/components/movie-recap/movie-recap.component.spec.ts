import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRecapComponent } from './movie-recap.component';

describe('MovieRecapComponent', () => {
	let component: MovieRecapComponent;
	let fixture: ComponentFixture<MovieRecapComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MovieRecapComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieRecapComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
