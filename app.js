require('dotenv').config();

require('dotenv').config();
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
  userAgent: 'userAgentName',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
  automatic_retries: false,
  api_requests_per_minute: 60,
  refreshToken: process.env.REFRESH_TOKEN,
  accessToken: process.env.ACCESS_TOKEN,
});

function addUser(sub, user) {
  r.getSubreddit(sub).addContributor({ name: user });
  return console.log('added ' + user);
}

function listUsernames(user) {
  return console.log('returning ' + user);
}

topList = r.getTop('all', {
  time: 'today',
  limit: 50,
});

topList
  .map((post) => {
    addUser(process.env.SUBREDDIT, post.author.name);
    //listUsernames(post.author.name);
  })
  .then(console.log('running'));
