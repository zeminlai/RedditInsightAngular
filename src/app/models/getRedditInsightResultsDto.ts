import { RedditPost } from "./redditPost.model";

export interface GetRedditInsightResultsDto{
    redditPosts: RedditPost[]; 
}