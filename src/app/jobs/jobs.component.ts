import { Component, OnInit } from '@angular/core';

import { JobsHttpService } from '../services/jobs-http.service';

import { INews } from '../models';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public jobs: INews[] = [];
  public loadingInProcess = false;

  constructor(
    private jobsHttpService: JobsHttpService,
  ) {}

  public ngOnInit(): void {
    this.initJobs();
  }

  private initJobs(): void {
    this.loadingInProcess = true;

    this.jobsHttpService.getAllJobs()
      .pipe(
        delay(1000),
      )
      .subscribe((jobs: INews[]) => {
        this.jobs = jobs;

        this.loadingInProcess = false;
      });
  }
}
