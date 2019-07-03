import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent, MovieViewComponent, PageNotFoundComponent } from './pages';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'movies' },
	{ path: 'movies', component: MovieListComponent },
	{ path: 'movies/:id', component: MovieViewComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
