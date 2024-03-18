import { Component } from '@angular/core';
import { RedditInsightService } from './services/reddit-insight.service';
import { RedditPost } from './models/redditPost.model';
import { GetRedditInsightResultsDto } from './models/getRedditInsightResultsDto';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'RedditInsightAngular';
  searchTerm?: string;
  allRedditPosts?: RedditPost[];
  loading: boolean = false;
  commentBodyhtml?: string[]
  now = new Date("2022-12-11T22:47:17Z");

  constructor(
    private redditInsightService: RedditInsightService, 
    private messageService: MessageService,
    ){
    // if(this.allRedditPosts){
    //   this.commentBodyhtml= []
    //   this.commentBodyhtml = this.markdownService.compile(this.allRedditPosts[0].comments[0].body);
    // }
  }

  ngOnInit(): void{
    console.log(this.now)
    
  }

  getRedditInsightResults(searchTerm: string): void {
    this.loading = true;
    this.showLoadingToast();
    this.redditInsightService.getRedditInsightResults(searchTerm)
      .subscribe((result: GetRedditInsightResultsDto) => {
        console.log(result);
        this.allRedditPosts = result.redditPosts;
        this.loading = false;
        this.closeLoadingToast();
      })
  }

  showLoadingToast() {
    this.messageService.add({ severity: 'info', summary: 'Fetching Reddit Posts', detail: 'This may take up to 10 seconds' , sticky: true});
  }

  closeLoadingToast(){
    this.messageService.clear();
  }

  convertToTimeAgo(date: string): Date{
      return new Date(date);
  }
}
