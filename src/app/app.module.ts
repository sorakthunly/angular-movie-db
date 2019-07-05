import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	BackdropCoverComponent,
	ContainerComponent,
	ContainerFullscreenComponent,
	FullscreenLoadingComponent,
	HeaderComponent,
	HeadingTitleComponent,
	HeadingSectionComponent,
	LoadingSectionComponent,
	MovieCardComponent,
	MovieRecapComponent,
	MoviesContainerComponent,
	NotFoundComponent,
	OverviewSectionComponent,
	ScrollLayoutComponent,
	ScrollTopComponent,
	SearchInputComponent,
	UserScoreComponent
} from './components';
import { DefaultImageDirective } from './directives';
import { MoviesEffect } from './effects';
import { MovieListComponent, MovieViewComponent, PageNotFoundComponent } from './pages';
import { ImagePipe, MovieDurationPipe, StringDatePipe, UserScorePipe } from './pipes';
import { APPLICATION_REDUCERS } from './store';

const COMPONENTS = [
	BackdropCoverComponent,
	ContainerComponent,
	ContainerFullscreenComponent,
	FullscreenLoadingComponent,
	HeaderComponent,
	HeadingTitleComponent,
	HeadingSectionComponent,
	LoadingSectionComponent,
	MovieCardComponent,
	MovieRecapComponent,
	MoviesContainerComponent,
	NotFoundComponent,
	OverviewSectionComponent,
	ScrollLayoutComponent,
	ScrollTopComponent,
	SearchInputComponent,
	UserScoreComponent
];
const DIRECTIVES = [DefaultImageDirective];
const MATERIAL_MODULES = [MatButtonModule, MatIconModule, MatProgressSpinnerModule];
const PAGES = [MovieListComponent, MovieViewComponent, PageNotFoundComponent];
const PIPES = [ImagePipe, MovieDurationPipe, StringDatePipe, UserScorePipe];

@NgModule({
	declarations: [AppComponent, ...COMPONENTS, ...DIRECTIVES, ...PAGES, ...PIPES],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		EffectsModule.forRoot([MoviesEffect]),
		StoreModule.forRoot(APPLICATION_REDUCERS),
		...MATERIAL_MODULES
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
