import { Component, OnInit } from '@angular/core';

import { JobsHttpService } from '../services/jobs-http.service';

import { INews } from '../models';
import { delay, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobs-error',
  templateUrl: './jobs-error.component.html',
  styleUrls: ['./jobs-error.component.scss'],
})
export class JobsErrorComponent implements OnInit {
  public jobs: INews[] = [];
  public loadingInProcess = false;
  public showError = false;

  constructor(
    private jobsHttpService: JobsHttpService,
    private toastr: ToastrService,
  ) {}

  public ngOnInit(): void {
    this.initJobs();
  }

  private initJobs(): void {
    this.loadingInProcess = true;

    this.jobsHttpService.getAllJobs()
      .pipe(
        delay(1200),
        tap(() => {
          throw new Error('Invalid request');
        }),
      )
      .subscribe(
        (jobs: INews[]) => {
          this.jobs = jobs;

          this.loadingInProcess = false;
        },
        (error: HttpErrorResponse) => {
          this.showError = true;

          this.toastr.error('Some error occured :(');
        }
      );
  }
}
