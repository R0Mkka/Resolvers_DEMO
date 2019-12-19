import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatProgressSpinnerModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FunnyPageComponent } from './funny-page/funny-page.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsErrorComponent } from './jobs-error/jobs-error.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsResolver } from './services/news.resolver';

@NgModule({
  declarations: [
    AppComponent,
    FunnyPageComponent,
    JobsComponent,
    JobsErrorComponent,
    HomeComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
