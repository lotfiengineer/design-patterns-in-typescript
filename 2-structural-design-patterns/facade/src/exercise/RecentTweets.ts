import OAuth from "./OAuth";
import TwitterClient from "./TwitterClient";

export default class RecentTweets {
  private appKey: string;
  private secret: string;

  constructor(appKey: string, secret: string) {
    this.appKey = appKey;
    this.secret = secret;
  }

  getRecentTweets() {
    const twitterClient = new TwitterClient();
    const tweets = twitterClient.getRecentTweets(this.getAccessToken());
    
    return tweets;
  }

  getAccessToken() {
    const oauth = new OAuth();
    const requestToken = oauth.requestToken(this.appKey, this.secret);
    const accessToken = oauth.getAccessToken(requestToken);

    return accessToken;
  }
}
