import tweepy
from CodeChella import config

htmlurl = '/Users/shantanushinde/CodeChella/index.html'

auth = tweepy.OAuthHandler(config.consumer_key, config.consumer_secret)
auth.set_access_token(config.access_token, config.access_token_secret)

api = tweepy.API(auth)

public_tweets = api.search('realDonaldTrump', count = 20)
for i in range(len(public_tweets)):
    print(i+1, ")",public_tweets[i].text)


def main():
    pass


if __name__ == "__main__":
    main()
