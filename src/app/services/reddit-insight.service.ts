import { Injectable } from '@angular/core';
import { GetRedditInsightResultsDto } from '../models/getRedditInsightResultsDto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RedditInsightService {
  private url = "RedditInsight"
  constructor(private http: HttpClient) { }

  public getRedditInsightResults(searchTerm: string) : Observable<GetRedditInsightResultsDto>{
    // let getRedditInsightResults: GetRedditInsightResultsDto ={
    //   redditPosts: [
    //     {
    //       title: "hi",
    //       body: "bye",
    //       author :"hi",
    //       subReddit: "asdf",
    //       upVotes: 12,
    //       comments : [
    //         {
    //         author: "dhd",
    //         upVotes: 123,
    //         createdAt: undefined,
    //         body: "hi"
    //         }
    //       ]
    //     }
    //   ],
    // }
    const options = { params: new HttpParams().set('searchTerm', searchTerm) }
    return this.http.get<GetRedditInsightResultsDto>(
      `${environment.apiUrlLocal}/${this.url}`, options
    )
  }
}
