import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INews } from '../models';

// const endpoint = 'https://api.hnpwa.com/v0/jobs/1.json';
const endpoint = '/assets/data/jobs.json';

@Injectable({
  providedIn: 'root'
})
export class JobsHttpService {
  constructor(
    private http: HttpClient,
  ) {}

  public getAllJobs(): Observable<INews[]> {
    return this.http.get<INews[]>(endpoint);
  }
}
