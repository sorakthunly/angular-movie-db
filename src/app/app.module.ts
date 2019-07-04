import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	HeadingTitleComponent,
	HeadingSectionComponent,
	MovieCardComponent,
	SearchInputComponent,
	ScrollLayoutComponent
} from './components';
import { BackdropCoverComponent } from './components/backdrop-cover/backdrop-cover.component';
import { ContainerComponent } from './components/container/container.component';
import { MoviesEffect } from './effects';
import { MovieListComponent, MovieViewComponent, PageNotFoundComponent } from './pages';
import { ImagePipe } from './pipes';
import { StringDatePipe } from './pipes/string-date.pipe';
import { UserScorePipe } from './pipes/user-score.pipe';
import { APPLICATION_REDUCERS } from './store';

const COMPONENTS = [
	HeadingTitleComponent,
	HeadingSectionComponent,
	MovieCardComponent,
	ScrollLayoutComponent,
	SearchInputComponent
];
const MATERIAL_MODULES = [MatButtonModule, MatIconModule];
const PAGES = [MovieListComponent, MovieViewComponent, PageNotFoundComponent];
const PIPES = [ImagePipe];

@NgModule({
	declarations: [
		AppComponent,
		...COMPONENTS,
		...PAGES,
		...PIPES,
		ContainerComponent,
		BackdropCoverComponent,
		UserScorePipe,
		StringDatePipe
	],
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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
