import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * This array hold all of our routes.
 */
const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path:'movie/:id', component: MovieDetailComponent
  }
];

/**
 * This module will handle routing in our app.
 */
@NgModule({
  imports: [AngularFontAwesomeModule, BrowserModule, RouterModule.forRoot(routes)],
  declarations: [MovieDetailComponent, DashboardComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
