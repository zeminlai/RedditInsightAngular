import { RedditComment } from "./redditComment.model";

export class RedditPost {
    author: string = '';
    subreddit: string = '';
    upvotes: number = 0;
    createdAt?: Date;
    title: string = '';
    body: string = '';
    link: string = '';
    comments: RedditComment[] = [];
}