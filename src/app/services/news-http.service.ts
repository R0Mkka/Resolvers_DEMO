import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INews } from '../models';

// const endpoint = 'https://api.hnpwa.com/v0/news/1.json';
const endpoint = '/assets/data/news.json';

@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {
  constructor(
    private http: HttpClient,
  ) {}

  public getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(endpoint);
  }
}
