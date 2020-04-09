# reddit-bot

The purpose of this bot is to add the top 50 users of r/all as approved users to a private subreddit.

## Setup

1. Clone the repo
2. Run `npm install`
3. Create `.env` file with credentials
4. Run `node app` to serve.

## Notes

* It is important to note that the Reddit account you create have permissions to execute the actions needed.
* This bot is not set up to use OAuth tokens.  Maybe I will do that later, or feel free to give me a pull request to approve ;)  Setting up proper tokens is important if you want the bot to be more complex and avoid Reddit API limitations.
