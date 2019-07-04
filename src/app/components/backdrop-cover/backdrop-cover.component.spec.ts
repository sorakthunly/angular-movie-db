import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropCoverComponent } from './backdrop-cover.component';

describe('BackdropCoverComponent', () => {
	let component: BackdropCoverComponent;
	let fixture: ComponentFixture<BackdropCoverComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [BackdropCoverComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BackdropCoverComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
