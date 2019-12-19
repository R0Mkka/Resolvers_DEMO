import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { INews } from '../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public news: INews[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.initNews();
  }

  private initNews(): void {
    const { news } = this.route.snapshot.data as { news: INews[] };

    this.news = news;
  }
}
