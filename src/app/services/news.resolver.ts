import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { NewsHttpService } from './news-http.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { INews } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Observable<INews[]>> {
  constructor(
    private newsHttpService: NewsHttpService,
  ) {}

  public resolve(): Observable<INews[]> {
    return this.newsHttpService.getAllNews()
      .pipe(
        delay(1000),
      );
  }
}
