import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard } from './guards/can-activate.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { NewsResolver } from './services/news.resolver';
import { ErrorResolver } from './services/error.resolver';

import { FunnyPageComponent } from './funny-page/funny-page.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsErrorComponent } from './jobs-error/jobs-error.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'funny-page',
    component: FunnyPageComponent,
    canActivate: [CanActivateGuard],
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'jobs-error',
    component: JobsErrorComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
    resolve: {
      news: NewsResolver,
    }
  },
  {
    path: 'error',
    component: NewsComponent,
    resolve: {
      news: ErrorResolver,
    }
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    canLoad: [CanLoadGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
