import Tweet from "./Tweet";

export default class TwitterClient {
  getRecentTweets(accessToken: string): Array<Tweet> {
    console.log("Getting recent tweets");

    return new Array<Tweet>();
  }
}
