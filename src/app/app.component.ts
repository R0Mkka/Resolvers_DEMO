import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event, NavigationCancel, NavigationError } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loadingInProcess = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  public ngOnInit(): void {
    this.subOnNavigationTriggers();
  }

  private subOnNavigationTriggers(): void {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.loadingInProcess = true;
      }

      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel) {
        this.loadingInProcess = false;
      }

      if (routerEvent instanceof NavigationError) {
        this.loadingInProcess = false;

        this.toastr.error('The data is not available for some reason :(');
      }
    });
  }
}
