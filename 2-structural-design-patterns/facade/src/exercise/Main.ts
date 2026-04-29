import RecentTweets from "./RecentTweets";

const twitterAPI = new RecentTweets("appKey", "secret");
const tweets = twitterAPI.getRecentTweets();
