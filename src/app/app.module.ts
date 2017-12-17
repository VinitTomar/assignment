import { MovieDetailService } from './services/movie-detail.service';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { DashboardService } from './services/dashboard.service';
import { fakeBackendProvider } from './fake-backend/fake-backend';

/**
 * This is the main module of our app.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [
    MovieDetailService,
    DashboardService,
    /**
     * Below there are only required at the time of testing.
     * When we have real backend, these three should be removed.
     */
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
