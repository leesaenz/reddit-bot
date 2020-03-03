require('dotenv').config();
const { CommentStream } = require("snoostorm");

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
    userAgent: 'some-description',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS,
    automatic_retries: true,
    api_requests_per_minute: 1
});

//Getting top posts on r/all of the week, limited to 10,000
r.getTop('all', { time: 'week', limit: 10000 }).map(post => {
    //Adding all authors of those posts to a subreddit as contributors
    r.getSubreddit(process.env.SUBREDDIT).addContributor({ name: post.author.name });
}
).then(console.log('done'));
