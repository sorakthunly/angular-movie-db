import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components';
import { HeadingSectionComponent } from './components/heading-section/heading-section.component';
import { HeadingTitleComponent } from './components/heading-title/heading-title.component';
import { MoviesEffect } from './effects';
import { MovieListComponent, MovieViewComponent, PageNotFoundComponent } from './pages';
import { APPLICATION_REDUCERS } from './store';

@NgModule({
	declarations: [
		AppComponent,
		SearchInputComponent,
		MovieListComponent,
		MovieViewComponent,
		PageNotFoundComponent,
		HeadingTitleComponent,
		HeadingSectionComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		EffectsModule.forRoot([MoviesEffect]),
		StoreModule.forRoot(APPLICATION_REDUCERS)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
