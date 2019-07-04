import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFullscreenComponent } from './container-fullscreen.component';

describe('ContainerFullscreenComponent', () => {
	let component: ContainerFullscreenComponent;
	let fixture: ComponentFixture<ContainerFullscreenComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContainerFullscreenComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContainerFullscreenComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
