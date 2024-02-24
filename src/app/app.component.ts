import { Component } from '@angular/core';
import { RedditInsightService } from './services/reddit-insight.service';
import { RedditPost } from './models/redditPost.model';
import { GetRedditInsightResultsDto } from './models/getRedditInsightResultsDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RedditInsightAngular';
  searchTerm?: string;
  allRedditPosts?: RedditPost[];
  loading: boolean = false;

  constructor(private redditInsightService: RedditInsightService){}

  ngOnInit(): void{
  }

  getRedditInsightResults(searchTerm: string): void {
    this.loading = true;
    this.redditInsightService.getRedditInsightResults(searchTerm)
      .subscribe((result: GetRedditInsightResultsDto) => {
        console.log(result);
        this.allRedditPosts = result.redditPosts;
        this.loading = false;
      })
  }
}
