import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLayoutComponent } from './scroll-layout.component';

describe('ScrollLayoutComponent', () => {
	let component: ScrollLayoutComponent;
	let fixture: ComponentFixture<ScrollLayoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ScrollLayoutComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ScrollLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
