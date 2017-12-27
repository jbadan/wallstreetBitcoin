var express = require('express');
var router = express.Router();
var request = require('request');

const NEWS_API_KEY = process.env.NEWS_API_KEY
if (!NEWS_API_KEY) {
  throw new Error('No News API key specified. Make sure you have ' +
    'NEWS_API_KEY in your environment variables.')
}

const URL_SHORTENER_API_KEY = process.env.URL_SHORTENER_API_KEY
if (!URL_SHORTENER_API_KEY) {
  throw new Error('No URL Shortener API key specified. Make sure you have ' +
    'URL_SHORTENER_API_KEY in your environment variables.')
}

const NEWS_API_BASE_URL = 'https://newsapi.org/v2/everything';
const URL_SHORTENER_BASE_URL = 'https://www.googleapis.com/urlshortener/v1/url';
const BAD_SOURCE = 'sourceDoesNotExist';


router.get('/news', function(req, res) {
    var bitcoin = "bitcoin";
    request({
      url: NEWS_API_BASE_URL,
      q: bitcoin,
      apiKey: NEWS_API_KEY
    }, function(error, response, body) {
        var result = JSON.parse(body).results;
        console.log(result);
        res.send(response);
    });
});


module.exports = router;
